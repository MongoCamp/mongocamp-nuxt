import { mongocampApi } from '#server/utils/mongocamp'

export default defineEventHandler((event) => {
  const { adminApi } = mongocampApi(event)
  return adminApi.listUsers()
})
