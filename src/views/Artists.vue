<template>
  <div>
    <v-text-field v-model="nuevoArtista" label="Escribe el artista que quieres agregar">
      <template v-slot:append>
        <v-btn @click="anadirArtista" color="primary">Guardar</v-btn>
      </template>
    </v-text-field>
    <br><br>
    <ul>
      <li v-for="(artista, index) in artistas" :key="index">
        {{ index + 1 }}. {{ artista }}
        <v-btn color="primary" @click="eliminarArtista(index)">Eliminar</v-btn>
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
    eliminarArtista(index){
      this.artistas.splice(index,1);
    }
  },

};
</script>
