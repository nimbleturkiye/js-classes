import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Vuex)

const Mutations = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

export default new Vuex.Store({
  state: {
    countHome: 0,
    countAbout: 0
  },
  mutations: {
    [Mutations.INCREMENT] (state, type) {
      type === 'countHome' ? state.countHome++ : state.countAbout++
    },
    [Mutations.DECREMENT] (state, type) {
      if (state[type] === 0) return

      type === 'countHome' ? state.countHome-- : state.countAbout--
    }
  },
  actions: {
    increment ({ commit }, type) {
      commit(Mutations.INCREMENT, type)
    },
    decrement ({ commit }, type) {
      commit(Mutations.DECREMENT, type)
    },
    async fetchPassengers () {
      const request = await axios.get('/passengers')
      return request.data
    },
    async fetchDrivers () {
      const request = await axios.get('/drivers')
      return request.data
    },
    async fetchPassenger ({ state }, passengerId) {
      const request = await axios.get(`/passengers/${passengerId}`)
      return request.data
    },
    async bookDriver ({ dispatch }, { passengerId, driverId, origin, destination }) {
      const request = await axios.post(`/passengers/${passengerId}/bookings`, {
        driverId, origin, destination
      })

      return request.data
    }
  }
})
