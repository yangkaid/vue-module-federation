<template>
  <h1>App2 About</h1>
  <pre>counter: {{ $store.state.counter }}</pre>
  <button @click="$store.dispatch('increment')">+</button>
  <button @click="goGoLocalstorage">go to localstorage</button>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "About",
  mounted() {
    let eid = this.$route.query.eid
    console.log(eid)
  },
  methods: {
    goGoLocalstorage() {
      console.log(123123)
      this.$router.push("/localstorage?eid=1123123")
    }
  },
  // setup() {
  //   const router = useRouter();

  //   const goGoLocalstorage = () => {
  //     router.push("/localstorage");
  //   };

  //   return {
  //     goGoLocalstorage,
  //   };
  // },
};
</script>

<style scoped>
h2 {
  color: blue;
}
</style>
