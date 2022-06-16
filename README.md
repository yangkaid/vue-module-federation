# vue-module-federation

- app1(host) 把 app2(remote) 嵌入

- 需要先把 app2 打包，並執行 `npm run preivw`

- 執行 app1 `npm run dev`，/app1 中 vite.config.js，remotes 需要設定 app2 的 remote ip 和 port

```javascript
remotes: {
  app2: "http://localhost:4173/assets/remoteEntry.js",
}
```

# 規則

import("app2/App")，app2 此名稱對應 remotes 中物件的 key，App 是嵌入的組件名稱

- App1 - App.vue:

```javascript
import { defineAsyncComponent } from "vue";

export default {
  name: "App",
  components: {
    RemoteApp: defineAsyncComponent(() => import("app2/App")),
  },
};
```

- App1 - in vite.config.js:

```javascript
federation({
  name: "app1",
  filename: "remoteEntry.js",
  remotes: {
    app2: "http://localhost:4173/assets/remoteEntry.js",
  },
  shared: ["vue"],
});
```

- App2 - in vite.config.js:

```javascript
 federation({
      name: "app2",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.vue",
      },
      shared: ["vue"],
    }),
```

# Running Demo

- 請分別開兩個終端機

- /app2

```sh
npm i

npm run build

npm run preview
```

- /app1

```sh
npm i

npm run dev
```
