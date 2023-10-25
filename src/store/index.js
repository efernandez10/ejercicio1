import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    artistas:[],
  },

  mutations:{
    agregarArtista(state,nuevoArtista){
      state.artistas.push(nuevoArtista);
    },
  },
 
});