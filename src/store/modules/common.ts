export default {
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {
    //存储token
    setToken(state: { token: string }, token: string) {
      state.token = token
      localStorage.token = token
    }
  },
  getters: {
    //获取token方法
    getToken(state: { token: string | null }) {
      if (!state.token) {
        state.token = localStorage.getItem('token')
      }
      return state.token
    }
  }
}