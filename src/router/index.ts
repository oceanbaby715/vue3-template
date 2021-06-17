import { createRouter, createWebHashHistory } from "vue-router"

import Home from "./modules/home"
import About from "./modules/about"

const routes = [
 ...Home,
 ...About
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router