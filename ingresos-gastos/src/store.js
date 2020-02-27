import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    listaConceptos: [],
    url: 'https://ejemplo-d49a3.firebaseio.com/ing-gastos-vue/angel'
  },
  getters: {
    conceptos(state) {
      return state.listaConceptos;
    },
    getConcepto(state) {
      return (id) => {
        return state.listaConceptos.find(c => c.id == id);
      }
    }
  },
  mutations: {
    guardarConcepto(state, payload) {
      state.listaConceptos = [...state.listaConceptos, payload]
    },
    actualizarConcepto(state, payload) {
      const conceptosActualizados = state.listaConceptos.map(c => {
        if (c.id == payload.id) {
          return payload;
        }
        return c;
      })
      state.listaConceptos = [...conceptosActualizados]
    }
  },
  actions: {
    guardar(context, payload) {
      axios.post(this.state.url + '.json', JSON.stringify(payload))
        .then(resp => {
          const id = resp.data.name;
          payload.id = id;
          context.commit('guardarConcepto', payload)
        })
    },
    update(context, payload) {
      const conceptoActualizado = {concepto: payload.concepto, cantidad: payload.cantidad};
      axios.put(this.state.url + `/${payload.id}.json`, JSON.stringify(conceptoActualizado))
        .then(resp => {
          context.commit('actualizarConcepto', payload)
        })
    }
  }
})