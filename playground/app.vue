<script setup lang='ts'>
const url = useMongocampUrl()

const { informationApi } = useMongocampApi()
const { login, logout, isLoggedIn, userRoles, userGrants } = useMongocampAuth()
const state = useMongocampStorage()

const { data: version, refresh: reloadVersion } = await useLazyAsyncData('version', () => informationApi.version())

const config = useRuntimeConfig()

async function actionLogin() {
  try {
    await login(config.MONGOCAMP_ADMIN_USER, config.MONGOCAMP_ADMIN_PASSWORD)
  }
  catch (e) {
  }
}

onMounted(() => {
  reloadVersion()
},
)

function actionLogout() {
  logout()
}
</script>

<template>
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
  <textarea v-model="state.token" rows="8" cols="100" />
  <div>
    <button class="btn-green" @click="actionLogin">
      Login
    </button>
    <button class="ml-4 btn-red" @click="actionLogout">
      Logout
    </button>
  </div>

  <h4>User {{ state.profile.user }}</h4>
  <h4>Roles</h4>
  <div>
    {{ userRoles }}
  </div>
  <h4>Grants</h4>
  <div>
    {{ userGrants }}
  </div>
</template>
