import type { Ref } from 'vue'
import { useState } from '#app'
import type { UserProfile } from '../api'

export function useMongocampUser (): Ref<UserProfile> {
  return useState<UserProfile>('mongocamp.user')
}
