<template>
  <h1>About</h1>
  <pre>counter: {{ $store.state.counter }}</pre>
  <button @click="$store.dispatch('increment')">+</button>
  <button @click="goGoLocalstorage">go to localstorage</button>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "About",
  setup() {
    const router = useRouter();

    const goGoLocalstorage = () => {
      router.push("/localstorage");
    };

    return {
      goGoLocalstorage,
    };
  },
};
</script>

<style scoped>
h2 {
  color: blue;
}
</style>
