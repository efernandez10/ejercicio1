import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  

  state: {
    artistas: [],
  },

  mutations: {
    agregarArtista(state, nuevoArtista) {
      state.artistas.push(nuevoArtista);
    },
  },
  plugins: [createPersistedState()],
});