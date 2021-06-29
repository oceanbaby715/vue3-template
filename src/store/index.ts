import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import getters from './getters'

export const key: InjectionKey<Store<any>> = Symbol()

import common from './modules/common'

// 创建一个新的 store 实例
export const store = createStore({
  modules: {
    common
  },
  getters
})