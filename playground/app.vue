<script setup lang='ts'>
import { consola } from 'consola'

const url = useMongocampUrl()

const { informationApi } = useMongocampApi()
const { findAll, findByField } = useMongocampSearch()

const { login, logout, isLoggedIn, userGrants } = useMongocampAuth()
const state = useMongocampStorage()

const { data: version, refresh: reloadVersion } = await useLazyAsyncData('version', () => informationApi.version())

const { data: roles, refresh: reloadRoles } = await useLazyAsyncData('roles', () => findAll('mc_roles', 1, ['-name'], ['name', '_id']))
const { data: adminRole, refresh: reloadRole } = await useLazyAsyncData('adminRole', () => findByField('mc_roles', 'name1', 'admin*'))

const config = useRuntimeConfig()

async function actionLogin() {
  try {
    await login(config.public.MONGOCAMP_ADMIN_USER, config.public.MONGOCAMP_ADMIN_PASSWORD)
  }
  catch (e) {
    consola.error(e)
  }
}

onMounted(() => {
  reloadVersion()
},
)

function actionReload() {
  reloadRoles()
  reloadRole()
}

function actionLogout() {
  logout()
}
</script>

<template>
  <div>
    <h2>MongoCamp Playground</h2>
    <h3>{{ url }}</h3>
    <h3>MongoCampVersion</h3>
    <div class="text-xl">
      {{ version }}
    </div>
    <h3>Status</h3>
    <div class="text-xl">
      logged in: {{ isLoggedIn }}
    </div>
    <h3>Token</h3>
    <textarea
      v-model="state.token"
      rows="8"
      cols="100"
    />
    <div>
      <button
        class="btn-green"
        @click="actionLogin"
      >
        Login
      </button>
      <button
        class="ml-4 btn-red"
        @click="actionLogout"
      >
        Logout
      </button>
    </div>

    <h4>User {{ state.profile.user }}</h4>
    <h4>Grants</h4>
    <pre>
    {{ userGrants }}
  </pre>
    <h4>Roles</h4>
    <div>
      <button
        class="btn-blue"
        @click="actionReload"
      >
        Reload Roles
      </button>
    </div>
    <pre>
    {{ roles }}
  </pre>
    <h4>Admin Role</h4>
    <pre>
    {{ adminRole }}
  </pre>
  </div>
</template>
