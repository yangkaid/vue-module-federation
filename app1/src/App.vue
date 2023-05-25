<script>
export default {
  name: "App",
};
</script>

<template>
  <h1>APP1</h1>
  <hr />
  <div>123123</div>
  <router-view></router-view>
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
