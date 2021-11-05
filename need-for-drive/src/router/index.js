// TO DO переключение
import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Vmain from "../views/v-main.vue";
import Vorder from "../views/v-order.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "v-main",
    component: Vmain,
  },
  {
    path: "/order",
    name: "v-order",
    component: Vorder,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
