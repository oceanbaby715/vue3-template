export default {
  namespaced: true,
  state: () => ({
    title: '首页'
  }),
  getters: {
    fullTitle: (state: { title: string }) => {
     return state.title + "- 前端_逗叔"
    }
  }
}