export default defineEventHandler((event) => {
  return useRuntimeConfig(event).mongocampApiKey // Returns `dev_key`
});
