  <template>
    <div>
      <h1>Artistas</h1>
      <v-btn @click="showAddArtistDialog = true">Agregar Artista</v-btn>
      <v-dialog v-model="showAddArtistDialog" max-width="500px">
        <v-card>
          <v-card-title>Agregar Artista</v-card-title>
          <v-card-text>
            <v-text-field v-model="newArtist" label="Nombre del artista"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="saveArtist">Agregar</v-btn>
            <v-btn @click="showAddArtistDialog = false">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <ul>
        <li v-for="artist in getArtists" :key="artist.id">
          <div>
            {{ artist.name }}
            <v-btn @click="removeArtist(artist.id)" color="red" class="ma-2" small>Eliminar</v-btn>
          </div>
        </li>


      </ul>
    </div>
  </template>

  <script>
  import { mapMutations, mapGetters } from 'vuex';

  export default {
    data() {
      return {
        showAddArtistDialog: false,
        newArtist: '',
      };
    },
    computed: {
      ...mapGetters(['getArtists']),
    },
    methods: {
      ...mapMutations(['addArtist', 'deleteArtist']),
      saveArtist() {
        if (this.newArtist.trim() !== '') {
          this.addArtist({ id: Math.random(), name: this.newArtist });
          this.newArtist = '';
          this.showAddArtistDialog = false;
        }
      },
      removeArtist(artistId) {
        this.deleteArtist(artistId);
      },
    },
  };
  </script>
