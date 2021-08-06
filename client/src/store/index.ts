import { createStore } from 'vuex'

export default createStore({
  state: {
    counting : 10
  },
  mutations: {
    increment (state) {
      state.counting++
    }
  },
  actions: {
  },
  modules: {
  }
})
