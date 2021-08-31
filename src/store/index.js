import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import createPersistedState from "vuex-persistedstate"

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    token(state, res) {
      state.token = res
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
