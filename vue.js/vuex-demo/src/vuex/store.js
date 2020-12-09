import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1,
  num:1
}

const mutations = {
  add(state,num) {
    state.count += num
  },
  reduce(state) {
    state.count--
  }
}

const getters = {
  newCount: (state) => {
    return state.count ** 2
  }
}
const actions = {
  addAction(context,n) {
    context.commit('add', n)
  }
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})