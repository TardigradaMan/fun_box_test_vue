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
        state.listCatFood.forEach(item => {
          if (item._id == id) {
            item.selected = !item.selected
          }
        })
        return {
          selectedProduct: [...state.selectedProduct.splice(itemInd, 1)]
        }
      }

      state.selectedProduct = [...state.selectedProduct, data]
    },
    DELETE_ALL_SELECT_PRODUCTS: state => {
      state.listCatFood.forEach(item => {
        item.selected = false
        item.outHover = false
      })
      state.selectedProduct = []
    },

    SET_INC_QTY: (state, data) => {
      const { index, inc, dec } = data
      if (inc) {
        state.selectedProduct[index].qty++
      }
      if (dec) {
        if (state.selectedProduct[index].qty === 1) {
          state.selectedProduct[index].qty = 1
        } else {
          state.selectedProduct[index].qty--
        }
      }
    },

    DELETE_ITEM_FROM_CART: (state, data) => {
      state.listCatFood.forEach(item => {
        if (item._id == data.id) {
          item.selected = false
          item.outHover = false
        }
      })
      state.selectedProduct.splice(data.index, 1)
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
    },
    async addNewOrder({ commit, state }) {
      try {
        await axios.post('http://localhost:3000/orders', {
          date: new Date().toLocaleString(),
          order: [...state.selectedProduct]
        })
        commit('DELETE_ALL_SELECT_PRODUCTS')
      } catch (error) {
        commit('SET_LOADING')
        commit('SET_ERROR')
        console.error(
          new Error(`Не удалось получить данные. Код ошибки: ${error}`)
        )
      }
    },
    changeQtyProduct({ commit }, data) {
      commit('SET_INC_QTY', data)
    },

    deleteFromCart({ commit }, data) {
      commit('DELETE_ITEM_FROM_CART', data)
    }
  },
  getters: {
    selectedProduct: state => state.selectedProduct
  },
  modules: {}
})
