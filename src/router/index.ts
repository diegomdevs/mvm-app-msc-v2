import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const appRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },

  {
    path: "/registration",
    name: "registration",
    component: () => import("../views/RegistrationView.vue"),
  },
  {
    path: "/registration/:entity",
    name: "registrationEntity",
    component: () => import("../views/RegistrationEntityView.vue"),
  },
  {
    path: "/registration/:entity/:entityForm",
    name: "registrationEntityForm",
    component: () => import("../views/RegistrationEntityFormView.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/TestView.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...appRoutes],
});

export default router;
