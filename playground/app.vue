<script setup lang='ts'>
import {
  useMongocampApi,
  useMongocampAuth,
  useMongocampToken,
  useMongocampUrl,
  useMongocampUser,
} from '#imports'

const url = useMongocampUrl()

const { informationApi } = useMongocampApi()
const { login, logout, isLoggedIn, userRoles, userGrants } = useMongocampAuth()
const user = useMongocampUser()
const router = useRouter()
const token = useMongocampToken()

const { data: version } = await useAsyncData('version', () => informationApi.version())

const config = useRuntimeConfig()

const actionLogin = async () => {
  try {
    await login(config.MONGOCAMP_ADMIN_USER, config.MONGOCAMP_ADMIN_PASSWORD)
    router.push('auth')

    // router.push(`/${profile2.value.user}`)
  }
  catch (e) {
  }
}

const actionLogout = () => {
  logout()
  router.push('login')
}
</script>

<template>
  <h3>Nuxt module playground! - logged in: {{ isLoggedIn }}</h3>
  <h3>{{ url }}</h3>
  <textarea v-model="token" rows="8" cols="100" />
  <div>
    <button class="btn-green" @click="actionLogin">
      Login
    </button>
    <button class="ml-4 btn-red" @click="actionLogout">
      Logout
    </button>
  </div>
  <h4>Version</h4>
  <div>
    {{ version }}
  </div>
  <h4>User</h4>
  <div v-if="user">
    {{ user.user }}
  </div>
  <h4>Roles</h4>
  <div v-if="user">
    {{ userRoles }}
  </div>
  <h4>Grants</h4>
  <div v-if="user">
    {{ userGrants }}
  </div>
</template>

