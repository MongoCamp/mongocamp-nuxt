// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    tooling: true,
    stylistic: true,
  },
  dirs: {
    src: [
      './example',
      './example/playground',
    ],
  },
}).append({
  ignores: ['test/__snapshots__/*', 'src/runtime/api'],
})
