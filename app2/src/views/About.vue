<template>
  <h1>About</h1>
  <pre>counter: {{ $store.state.counter }}</pre>
  <button @click="$store.dispatch('increment')">+</button>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
h2 {
  color: blue;
}
</style>
