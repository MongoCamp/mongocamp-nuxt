import { useRuntimeConfig } from '#app'

export function useMongocampUrl(): string {
  const config = useRuntimeConfig()
  return config.public.mongocamp?.url
}
