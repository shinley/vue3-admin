import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 初始化样式表
import '@/styles/index.scss'

// 导入SvgIcon
import installIcons from '@/icons'

// 导入路由监权
import './permission'

const app = createApp(App)
installIcons(app)
installElementPlus(app)
app.use(store).use(router).mount('#app')
