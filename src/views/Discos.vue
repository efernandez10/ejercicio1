<template>
  <div>
    <h1>Discos</h1>
    <v-btn @click="showAddAlbumDialog = true">Agregar Disco</v-btn>
    <v-dialog v-model="showAddAlbumDialog" max-width="500px">
      <v-card>
        <v-card-title>Agregar Disco</v-card-title>
        <v-card-text>
          <v-text-field v-model="newAlbumName" label="Nombre del disco"></v-text-field>
          <v-select v-model="selectedArtist" :items="getArtists" item-text="name" item-value="id" label="Selecciona un artista"></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="saveAlbum">Agregar</v-btn>
          <v-btn @click="showAddAlbumDialog = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Mostrar los discos del artista seleccionado -->
    <div v-if="selectedArtist && typeof selectedArtist === 'object'">
      <h2>Discos de {{ selectedArtist.name }}</h2>
      <ul>
        <li v-for="album in selectedArtist.albums || []" :key="album.id">{{ album.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default {
  data() {
    return {
      showAddAlbumDialog: false,
      newAlbumName: '',
      selectedArtist: null,
    };
  },
  computed: {
    ...mapGetters(['getArtists']),
  },
  methods: {
    ...mapMutations(['addAlbumToArtist']),
    saveAlbum() {
      console.log("Entro al método saveAlbum");
      console.log("Nombre del álbum:", this.newAlbumName);

      if (this.newAlbumName.trim() !== '' && this.selectedArtist && typeof this.selectedArtist === 'object') {
        console.log("Datos válidos");

        if (!this.selectedArtist.albums) {
          this.$set(this.selectedArtist, 'albums', []);
        }

        const uniqueId = uuidv4();
        console.log("ID del álbum:", uniqueId);

        // Convertir selectedArtist a una cadena antes de agregarlo al álbum
        const artistIdAsString = String(this.selectedArtist);

        const newAlbum = {
          id: uniqueId,
          name: this.newAlbumName,
          artist: artistIdAsString, // Almacenar como una cadena
        };

        this.addAlbumToArtist({ artistId: artistIdAsString, album: newAlbum });
        console.log("Álbum agregado:", newAlbum);

        console.log("Array de discos:", this.selectedArtist.albums);

        this.newAlbumName = '';
        this.showAddAlbumDialog = false;
      } else {
        console.log("Datos no válidos");
        console.log("Nombre del álbum válido:", this.newAlbumName.trim() !== '');
        console.log("Artista válido:", this.selectedArtist && typeof this.selectedArtist === 'object');
      }
    },
  },
};
</script>
