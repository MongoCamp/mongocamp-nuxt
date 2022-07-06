<script setup lang='ts'>
import {
  useMongocampApi,
  useMongocampAuth,
  useMongocampToken,
  useMongocampUrl,
  useMongocampUser,
} from '#imports'
import {useMongocampSearch} from "../src/runtime/composables/mongocampSearch";

const url = useMongocampUrl()

const { informationApi, documentApi } = useMongocampApi()
const { createFindRequest } = useMongocampSearch()
const { login, logout, isLoggedIn, userRoles, userGrants } = useMongocampAuth()
const user = useMongocampUser()
const router = useRouter()
const token = useMongocampToken()

const { data: version } = await useAsyncData('version', () => informationApi.version())

const config = useRuntimeConfig()

const actionLogin = async () => {
  try {
    await login(config.MONGOCAMP_ADMIN_USER, config.MONGOCAMP_ADMIN_PASSWORD)
    router.push('/')
    refreshRolesByFind()
    refreshRolesByList()

    // router.push(`/${profile2.value.user}`)
  }
  catch (e) {
  }
}

const findRoles = createFindRequest('mc_roles')
const { data: rolesByFind, refresh: refreshRolesByFind } = await useAsyncData('rolesByFind', () => documentApi.find(findRoles))

const { data: rolesByList, refresh: refreshRolesByList } = await useAsyncData('rolesByList', () => documentApi.listDocuments({collectionName: 'mc_roles'}))


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
    <button class="btn-blue" @click="refreshRolesByFind">
      refreshRoles
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
  <h4>findResults</h4>
  <div v-if="rolesByFind">
    <h5>{{ rolesByFind.length }} Roles</h5>
    {{ rolesByFind }}
  </div>
  <h4>listResults</h4>
  <div v-if="rolesByList">
    <h5>{{ rolesByList.length }} Roles</h5>
    {{ rolesByList }}
  </div>
</template>

