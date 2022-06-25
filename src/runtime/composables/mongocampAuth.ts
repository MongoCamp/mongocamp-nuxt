import type { Login, UserProfile } from '../api'

import { useMongocampApi } from './mongocampApi'
import { useMongocampToken } from './mongocampToken'
import { useMongocampUser } from './mongocampUser'

export const useMongocampAuth = () => {
  const token = useMongocampToken()
  const user = useMongocampUser()
  const { authApi } = useMongocampApi()

  const setToken = (value: string | null) => {
    token.value = value
  }

  const setUser = (value: UserProfile) => {
    user.value = value
  }

  const login = async (loginId: string, loginPassword: string): Promise<UserProfile> => {
    setToken(null)

    const login: Login = { userId: loginId, password: loginPassword }
    const result = await authApi.login({ login })
    setToken(result.authToken)
    setUser(result.userProfile)

    return result.userProfile
  }

  const logout = (): void => {
    setToken(null)
    setUser(null)
  }

  const userProfile = async (): Promise<UserProfile> => {
    if (token.value && !user.value) {
      try {
        const profile = await authApi.userProfile()
        setUser(profile)
      }
      catch (e) {
        setToken(null)
      }
    }
    return user.value
  }

  const isLoggedIn = computed(() => token.value != null && user.value != null)

  const userRoles = computed(() => {
    if (user.value)
      return user.value.roles
    else
      return []
  })

  const userGrants = computed(() => {
    if (user.value)
      return user.value.grants
    else
      return []
  })

  return { login, logout, userProfile, isLoggedIn, userRoles, userGrants }
}
