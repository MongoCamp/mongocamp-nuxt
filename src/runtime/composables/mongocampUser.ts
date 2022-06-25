import type { Ref } from 'vue'
import type { UserProfile } from '../api'
import { useState } from '#app'

export const useMongocampUser = (): Ref<UserProfile> =>
  useState<UserProfile>('mongocamp.user')
