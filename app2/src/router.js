import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/sa/about",
      component: () => import("./views/About.vue"),
    },
    {
      path: "/sa/localstorage",
      component: () => import("./views/LocalStorage.vue"),
    },
  ],
});
