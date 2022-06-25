import { useMongocampAuth } from './composables/mongocampAuth'
import { defineNuxtPlugin } from '#app'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineNuxtPlugin(async (nuxtApp) => {
  const { userProfile } = useMongocampAuth()

  await userProfile()
})
