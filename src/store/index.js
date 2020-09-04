import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listCatFood: [],
    selectedProduct: [],
    loading: true,
    error: false
  },
  mutations: {
    SET_CAD_FOOD: (state, data) => {
      state.listCatFood = data
    },

    SELECT_PRODUCT: (state, data) => {
      const id = data._id

      const itemInd = state.selectedProduct.findIndex(item => item._id === id)

      if (itemInd >= 0) {
        return {
          selectedProduct: [...state.selectedProduct.splice(itemInd, 1)]
        }
      }

      state.selectedProduct = [...state.selectedProduct, data]
    },
    SET_ERROR: state => {
      state.error = true
    },
    SET_LOADING: state => {
      state.loading = false
    }
  },
  actions: {
    async getlistCatFood({ commit }) {
      try {
        const { data } = await axios.get('http://localhost:3000/feeds')
        commit('SET_LOADING')
        commit('SET_CAD_FOOD', data)
      } catch (error) {
        commit('SET_LOADING')
        commit('SET_ERROR')
        console.error(
          new Error(`Не удалось получить данные. Код ошибки: ${error}`)
        )
      }
    }
  },
  getters: {
    selectedProduct: state => state.selectedProduct
  },
  modules: {}
})
