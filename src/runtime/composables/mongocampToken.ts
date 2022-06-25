import { useCookie, useNuxtApp } from '#app'

export const useMongocampToken = () => {
  const nuxtApp = useNuxtApp()

  nuxtApp._cookies = nuxtApp._cookies || {}
  if (nuxtApp._cookies.mongocamp_token)
    return nuxtApp._cookies.mongocamp_token

  const cookie = useCookie<string | null>('mongocamp_token')
  nuxtApp._cookies.mongocamp_token = cookie
  return cookie
}
