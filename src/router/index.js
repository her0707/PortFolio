import { createRouter, createWebHistory } from "vue-router";
import layout from "@/layouts/layout";

const routes = [
  {
    path: "/",
    component: layout,
    children: [
      {
        name: "home",
        path: "/",
        component: () => import("@/views/home")
      },
      {
        name: "about",
        path: "/about",
        component: () => import("@/views/about")
      },
      {
        name: "skill",
        path: "/skill",
        component: () => import("@/views/skill")
      },
      {
        name: "project",
        path: "/project",
        component: () => import("@/views/project")
      },
      {
        name: "career",
        path: "/career",
        component: () => import("@/views/career")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
