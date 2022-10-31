import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WithGuest from "../views/WithGuest.vue";
import OneTime from "../views/OneTime.vue";
import Group from "../views/Group.vue";
import Personal from "../views/Personal.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/with-guest",
      name: "with-guest",
      component: WithGuest,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/one-time",
      name: "one-time",
      component: OneTime,
    },
    {
      path: "/group",
      name: "group",
      component: Group,
    },
    {
      path: "/personal",
      name: "personal",
      component: Personal,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
