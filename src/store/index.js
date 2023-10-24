import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    artists: JSON.parse(localStorage.getItem('artists')) || [],
  },
  mutations: {
    addArtist(state, artist) {
      state.artists.push(artist);
      localStorage.setItem('artists', JSON.stringify(state.artists));
    },
    addAlbumToArtist(state, { artistId, album }) {
      const artist = state.artists.find((artist) => artist.id === artistId);
      if (artist) {
        if (!artist.albums) {
          artist.albums = [];
        }
        artist.albums.push(album);
        localStorage.setItem('artists', JSON.stringify(state.artists));
      }
    },
  },
  getters: {
    getArtists: (state) => state.artists,
  },
});