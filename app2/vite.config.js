import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "app2",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.vue",
        "./About": "./src/views/About.vue",
        "./LocalStorage": "./src/views/LocalStorage.vue",
      },
      shared: ["vue", "vue-router", "vuex"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    polyfillModulePreload: false,
    assetsInlineLimit: 40960,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },
});
