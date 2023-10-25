<template>
  <div>
    <v-text-field v-model="nuevoArtista" label="Escribe el artista que quieres agregar">
      <template v-slot:append>
      </template>
    </v-text-field>
    <v-btn @click="anadirArtista" color="success">Guardar</v-btn>
    <br><br>
    <ul>
      <li v-for="(artista, index) in artistas" :key="index">
        {{ index + 1 }}. {{ artista }}
        <v-btn color="red" @click="eliminarArtista(index)" rounded>Eliminar</v-btn> <br><br>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['artistas']),
  },
  data() {
    return {
      nuevoArtista: "",
    };
  },
  methods: {
    ...mapMutations(['agregarArtista']),
    anadirArtista() {
      this.agregarArtista(this.nuevoArtista);
      this.nuevoArtista = "";
    },
    eliminarArtista(index) {
      this.artistas.splice(index, 1);
    }
  },

};
</script>
