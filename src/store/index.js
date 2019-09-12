import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: sessionStorage.getItem('u')
              && JSON.parse(sessionStorage.getItem('u')) || {},
  },
  mutations: {
    login (state, data) {
      state.userInfo = data
      sessionStorage.setItem('u', JSON.stringify(data))
    },
  },
  actions: {
    login ({commit, state}, loginInfo) {
      commit('login', loginInfo)
    },
  }
})

export default store
