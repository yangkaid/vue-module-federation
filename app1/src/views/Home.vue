<template>
  <div>
    <h1>Home</h1>
    <pre>counter: {{ $store.state.counter }}</pre>

    <button @click="goGoAbout">go to about</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "Home",
  components: {},
  setup() {
    const router = useRouter();

    const goGoAbout = () => {
      router.push("/about");
    };

    return {
      goGoAbout,
    };
  },
};
</script>
