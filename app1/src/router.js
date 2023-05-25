import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: () => import("./views/Home.vue"),
    },
    {
      name: 'About',
      path: '/about',
      component: () => import('./views/About.vue')
     }
    // {
    //   name: "About",
    //   path: "/about",
    //   component: () => import("app2/About"),
    // },
    // {
    //   path: "/localstorage",
    //   component: () => import("app2/LocalStorage"),
    // },
  ],
});
