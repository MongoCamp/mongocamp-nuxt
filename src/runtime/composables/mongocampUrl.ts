import { useRuntimeConfig } from '#app'

export function useMongocampUrl(): string {
  const config = useRuntimeConfig()
  return config.mongocamp?.url
}
