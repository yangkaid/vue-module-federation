import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
// import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext'
  },
  plugins: [
    vue2(),
    // legacy({
    //   targets: ['ie >= 11'],
    //   additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    // }),
    federation({
      name: 'app3',
      filename: 'remoteEntry.js',
      exposes: {
        './HomeView': './src/views/HomeView.vue',
        './AboutView': './src/views/AboutView.vue',
        './vue2': './node_modules/vue/dist/vue',
        './routes': './src/router/routes.js',
        './VueRouter': './node_modules/vue-router/dist/vue-router.js',
        './elementUI': './node_modules/element-ui/lib/index.js',
        './elementCss': './node_modules/element-ui/lib/theme-chalk/index.css'
      },
      // shared: ['vue-router', 'vuex']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
