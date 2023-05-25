<template>
  <div>
    <h1>Home</h1>
    <pre>counter: {{ $store.state.counter }}</pre>

    <button @click="goGoAbout">go to about</button>
    <div id="HomeView"></div>
    <HomeView></HomeView>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { vue2ToVue3 } from '../utils/vue2Tovue3';
import HomeView from 'app3/HomeView'

export default {
  name: "Home",
  // components: {
  //   HomeView
  // },
  mounted() {
    vue2ToVue3(HomeView, 'HomeView')
  },
  methods: {
    goGoAbout() {
      this.$router.push("/about?eid=1111");
    }
  },
};
</script>
