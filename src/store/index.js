import { createStore } from 'vuex'
import user from './modules/user'
import getters from './gettrs'

export default createStore({
  getters,
  modules: {
    user
  }
})
