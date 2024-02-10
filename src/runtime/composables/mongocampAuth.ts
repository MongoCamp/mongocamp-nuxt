import { computed } from 'vue'
import type { Login, UserProfile } from '../api'

import { useMongocampApi } from './mongocampApi'
import { useMongocampStorage } from './mongocampStorage'
import { useMongocampUser } from './mongocampUser'

export function useMongocampAuth () {
  const state = useMongocampStorage()
  const { authApi } = useMongocampApi()
  const user = useMongocampUser()

  async function isAuthenticated () {
    return await authApi.isAuthenticated()
  }

  const login = async (loginId: string, loginPassword: string): Promise<UserProfile> => {
    logout()
    const login: Login = { userId: loginId, password: loginPassword }
    const result = await authApi.login({ login })
    state.value.token = (result.authToken)
    state.value.profile = result.userProfile
    user.value = result.userProfile
    return result.userProfile
  }

  const logout = (): void => {
    state.value.token = ''
    const profile: UserProfile = { user: '', isAdmin: false }
    state.value.profile = profile
    user.value = profile
  }

  const isLoggedIn = computed(() => state.value?.token?.length > 0)

  const userRoles = computed(() => state.value.profile.roles ?? [])

  const userGrants = computed(() => state.value.profile.grants ?? [])

  return { login, logout, isAuthenticated, isLoggedIn, userRoles, userGrants }
}
