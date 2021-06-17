<template>
  <div>关于- {{title}}</div>
  <button @click="inCrement"> count is: </button>
  <p>{{ count }}</p>
  <a-button type="primary">123</a-button>
</template>

<script>
  import { defineComponent, computed } from 'vue'
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
      return {
        count,
        title,
        inCrement: () => store.commit('increment')
      }
    }
  })
</script>

<style>

</style>