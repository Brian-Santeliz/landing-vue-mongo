import Vue from "vue";
import Router from "vue-router";
import Index from "./Index.vue";
Vue.use(Router);

//Styles
import "./public/styles/bootstrap.min.css";
import "./public/styles/style.css";

//componets
import Home from "./pages/Home.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
  ],
});

new Vue({
  router,
  render: (h) => h(Index),
}).$mount("#root");
