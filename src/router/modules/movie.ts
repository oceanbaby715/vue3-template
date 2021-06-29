import Layout from "@/layout/index.vue";

export default {
  path: '/movie',
  name: "Movie",
  component: Layout,
  meta: {
    title: "电影管理",
  },
  redirect: { name: "MovieList" },
  children: [{
    path: "list",
    name: "MovieList",
    component: () => import('views/movie/index.vue'),
    meta: {
      title: "电影列表",
    },
  }]
}
