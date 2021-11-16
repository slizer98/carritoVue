import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: [],
    carrito: {}
  },
  mutations: {
    setProducto(state, payload){
      state.productos = payload
    },
    setCarrito(state, payload){
      state.carrito[payload.id] = payload
    },
    vaciarCarrito(state){
      state.carrito = {}
    },
    aumentar(state, payload){
      state.carrito[payload].cantidad = state.carrito[payload].cantidad + 1
    },
    disminuir(state, payload){
      state.carrito[payload].cantidad = state.carrito[payload].cantidad - 1
      if (state.carrito[payload].cantidad === 0) {
        delete state.carrito[payload]
      }
    },
  },
  actions: {
    async fetchData( {commit} ){
      try{
        const res = await fetch('api.json')
        const data = await res.json()
        commit('setProducto', data)
      } catch (error){
        console.log(error)
      }
    },
    agregarAlCarrito({commit, state}, producto){
      state.carrito.hasOwnProperty(producto.id)
      ? producto.cantidad = state.carrito[producto.id].cantidad + 1 
      :producto.cantidad = 1
      commit('setCarrito', producto)
    }
  },
  modules: {
  },
  getters: {
    totalCantidad(state){
      return Object.values(state.carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
    },
    totalPrecio(state){
      return Object.values(state.carrito).reduce((acc, {cantidad, precio}) => acc +cantidad * precio)
    }
  }

})
