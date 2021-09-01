import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import createPersistedState from "vuex-persistedstate"

export default new Vuex.Store({
  state: {
    token: '',
    name:""
  },
  mutations: {
    token(state, res) {
      state.token = res.remember_token
      state.name = res.nickname
    },
    tui(state) {
      state.token = ""
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({

    storage: window.sessionStorage

  })]
})
