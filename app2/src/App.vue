<script>
export default {
  name: "App",
};
</script>

<template>
  <h1>APP2</h1>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/localstorage">LocalStorage</router-link>
  </nav> -->
  <main>
    <router-view></router-view>
  </main>
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
  background-color: red;
}
</style>
