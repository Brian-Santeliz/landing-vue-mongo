import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: "/",
      component: () => import("../pages/Home.vue"),
      name: "Home",
    },
    {
      path: "/services",
      component: () => import("../pages/Services.vue"),
      name: "Services",
    },
    {
      path: "/about",
      component: () => import("../pages/About.vue"),
      name: "About",
    },
  ],
  mode: "history",
});
export default router;
