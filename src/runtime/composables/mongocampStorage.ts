import { useSessionStorage } from '@vueuse/core'
import type { UserProfile } from '../api'

export function useMongocampStorage () {
  const profile: UserProfile = { user: '', isAdmin: false }
  return useSessionStorage('mongocamp', { token: '', profile })
}
