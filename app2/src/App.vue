<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <nav>
    <routerLink to="/">Home</routerLink> |
    <routerLink to="/sa/about">About</routerLink> |
    <routerLink to="/sa/localstorage">LocalStorage</routerLink>
  </nav>
  <main>
    <router-view />
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
