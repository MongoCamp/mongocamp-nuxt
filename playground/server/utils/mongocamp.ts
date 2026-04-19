import type { H3Event } from 'h3'

export function mongocampApi(event: H3Event) {
  const url = useRuntimeConfig(event).public.mongocamp?.url
  const apiKey = useRuntimeConfig(event).mongocampApiKey

  return useMongocampServerApi(url, apiKey)
}
