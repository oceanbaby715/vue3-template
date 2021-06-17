export default {
  namespaced: true,
  state: () => ({
    title: '关于'
  }),
  getters: {
    fullTitle: (state: { title: string }) => {
     return state.title + "- 前端_逗叔"
    }
  }
}