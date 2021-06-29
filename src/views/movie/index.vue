<template>
  <div>关于- {{title}}</div>
  <button @click="inCrement"> count is: </button>
  <p>{{ count }}</p>
  <a-button type="primary" @click="getTestList">获取测试数据</a-button>
</template>

<script lang="ts">
import { defineComponent, computed, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import { key } from '../../store'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup() {
    const store = useStore(key)
    console.log(store)

    const count = computed(() => store.state.count)
    const title = store.getters["home/fullTitle"]

    const { proxy } = getCurrentInstance()
    const api = proxy.$api

    const getTestList = () => {
      api.test.getTest().then(res=>{
        console.log(res)
      })
    }

    return {
      getTestList,
      count,
      title,
      inCrement: () => store.commit('increment')
    }
  }
})
</script>

<style>
</style>