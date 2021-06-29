import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import { store, key } from './store'
import { useAntd } from "./plugins/ant-design-vue"
import "./assets/styles/common.less"
import Api from "./api"

//创建并挂载
const app = createApp(App)

//应用路由
app.use(router)

//应用vuex
app.use(store, key)

//应用antd
useAntd(app)

app.mount('#app')

//全局挂载 Api接口
app.config.globalProperties.$api = Api;