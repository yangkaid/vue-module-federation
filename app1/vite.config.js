import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "app1",
      filename: "remoteEntry.js",
      remotes: {
        app3: {
          external: "http://localhost:4173/assets/remoteEntry.js",
          format: "esm",
          from: "vite",
        },
      },
      // shared: ["vue-router", "vuex"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
