import { computed } from 'vue'
import { consola } from 'consola'

import type { Login, LoginResult, UserProfile } from '../api'

import { useMongocampApi } from './mongocampApi'
import { useMongocampStorage } from './mongocampStorage'
import { useMongocampUser } from './mongocampUser'
import { useRuntimeConfig } from '#app'

export function useMongocampAuth() {
  const config = useRuntimeConfig()
  const refreshToken: boolean = config.public.mongocamp?.refreshToken
  const tokenRefreshIntervall: number = config.public.mongocamp?.tokenRefreshIntervall

  const state = useMongocampStorage()
  const { authApi } = useMongocampApi()
  const user = useMongocampUser()
  let updateTokenInterval: number | undefined

  async function isAuthenticated() {
    return await authApi.isAuthenticated()
  }

  async function updateToken() {
    try {
      const result: LoginResult = await authApi.refreshToken()
      updateUserState(result)
    }
    catch (e) {
      consola.log(e)
    }
  }

  function updateUserState(result: LoginResult) {
    state.value.token = (result.authToken)
    state.value.profile = result.userProfile
    user.value = result.userProfile
  }

  const login = async (loginId: string, loginPassword: string): Promise<UserProfile> => {
    logout()
    const login: Login = { userId: loginId, password: loginPassword }
    const result: LoginResult = await authApi.login({ login })
    updateUserState(result)
    if (refreshToken) {
      updateTokenInterval = window.setInterval(updateToken, tokenRefreshIntervall)
    }

    return result.userProfile
  }

  const logout = (): void => {
    state.value.token = ''
    const profile: UserProfile = { user: '', isAdmin: false }
    state.value.profile = profile
    user.value = profile
    if (refreshToken) {
      window.clearInterval(updateTokenInterval)
    }
  }

  const isLoggedIn = computed(() => {
    const result: boolean = state.value?.token?.length > 0
    if (result && refreshToken && !updateTokenInterval) {
      updateTokenInterval = window.setInterval(updateToken, tokenRefreshIntervall)
    }
    else if (!result && updateTokenInterval) {
      window.clearInterval(updateTokenInterval)
    }
    return result
  })

  const userRoles = computed(() => state.value.profile.roles ?? [])

  const userGrants = computed(() => state.value.profile.grants ?? [])

  return { login, logout, isAuthenticated, isLoggedIn, userRoles, userGrants }
}
