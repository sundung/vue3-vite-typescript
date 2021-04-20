import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

// 引入路由
import router from './router/index'

// 引入 vuex
import store from './store/index'

// 集成 UI 框架 Element Plus

import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
