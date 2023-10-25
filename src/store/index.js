import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  

  state: {
    artistas: [],
    discos:[],
  },

  mutations: {
    agregarArtista(state, nuevoArtista) {
      state.artistas.push(nuevoArtista);
    },
    agregarDisco(state, nuevoDisco) {
      state.discos.push(nuevoDisco);
    },
  },
  plugins: [createPersistedState()],
});