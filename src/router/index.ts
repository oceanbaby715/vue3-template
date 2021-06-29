import { createRouter, createWebHashHistory } from "vue-router"

import Common from "./modules/common"
import Movie from "./modules/movie"

const routes = [
  Movie,
  ...Common
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router