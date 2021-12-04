import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 初始化样式表
import '@/styles/reset.css'

const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')
