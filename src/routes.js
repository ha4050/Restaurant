import Home from "./components/Home.vue";
import SignUp from "./components/SignUp";
import { createRouter, createWebHistory } from "vue-router";
import login from "./components/login.vue";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "login",
    component: login,
    path: "/login",
  },
  {
    name: "Add",
    component: Add,
    path: "/Add",
  },
  {
    name: "Update",
    component: Update,
    path: "/Update/:id",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
