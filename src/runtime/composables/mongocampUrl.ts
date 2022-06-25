import { useRuntimeConfig } from '#app'

export const useMongocampUrl = (): string => {
  const config = useRuntimeConfig()
  return config.mongocamp?.url
}
