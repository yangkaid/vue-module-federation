<template>
    <div id="AboutView"></div>
    <AboutView></AboutView>
    {{ msg }}
    <button @click="goGoLocalstorage">改变</button>
</template>

<script>
import AboutView from 'app3/AboutView'
import { vue2ToVue3 } from "../utils/vue2Tovue3";
export default {
  name: "About",
  mounted() {
    vue2ToVue3(AboutView, 'AboutView')
  },
  data() {
    return {
      msg: '123'
    }
  },
  methods: {
    goGoLocalstorage() {
      this.msg = '哈哈哈'
    }
  }
};
</script>

<style scoped>
h2 {
  color: blue;
}
</style>
