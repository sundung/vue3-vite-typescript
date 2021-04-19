import { createApp } from 'vue'
import App from './App.vue'

// 引入路由
import router from './router/index'

// 引入 vuex
import store from './store/index'

createApp(App).use(router).use(store).mount('#app')
