<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "App",
  components: {
    RemoteApp: defineAsyncComponent(() => import("app2/App")),
  },
};
</script>

<template>
  <h1>APP1</h1>
  <hr />
  <RemoteApp></RemoteApp>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

h1 {
  margin: 10px;
  padding: 10px;
  text-align: center;
  background-color: cyan;
}
</style>
