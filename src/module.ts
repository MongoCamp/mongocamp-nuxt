import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { addPlugin, defineNuxtModule } from '@nuxt/kit'
import defu from 'defu'

export interface ModuleOptions {
  url?: string
  paginationSize?: number
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-mongocamp',
    configKey: 'mongocamp',
  },

  setup(options, nuxt) {
    if (!options.url || options.url.length === 0)
      throw new Error('Missing Mongocamp Base Url')

    if (!options.paginationSize || options.paginationSize < 10)
      options.paginationSize = 500

    nuxt.options.runtimeConfig.public.mongocamp = defu(nuxt.options.runtimeConfig.public.mongocamp,
      {
        url: options.url,
        paginationSize: options.paginationSize
      },
    )

    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)
    addPlugin(resolve(runtimeDir, 'plugin'))

    nuxt.hook('autoImports:dirs', (dirs) => {
      dirs.push(resolve(runtimeDir, 'composables'))
    })
  },
})
