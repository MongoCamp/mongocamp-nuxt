import NuxtMongocamp from '..'

export default defineNuxtConfig({
  ssr: true,
  modules: [
    NuxtMongocamp,
    '@unocss/nuxt'
  ],
  mongocamp: {
    url: process.env.MONGOCAMP_URL
  },
  runtimeConfig: {
    // Private config that is only available on the server

    // Config within public will be also exposed to the client
    public: {
      MONGOCAMP_ADMIN_USER: process.env.MONGOCAMP_ADMIN_USER,
      MONGOCAMP_ADMIN_PASSWORD: process.env.MONGOCAMP_ADMIN_PASSWORD
    }
  },
  unocss: {
    uno: true,
    attributify: true,
    preflight: false,
    icons: {
      scale: 1.2
    },
    shortcuts: [
      // you could still have object style
      {
        btn: 'py-2 px-4 font-semibold rounded-lg shadow-md'
      },
      // dynamic shortcuts
      [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`]
    ]
  }
})
