<template>
  <div>
    <v-text-field v-model="nombreDisco" label="Nombre del Disco"></v-text-field>
    <v-combobox
    v-model="artistaSeleccionado"
    :items="artistas"
    label="Artista"
    ></v-combobox>
    <v-btn color="success" @click="guardarDisco()">Guardar Disco</v-btn><br><br>
    <ul>
      <li v-for="(disco,index) in discos" :key="index">
        {{ index + 1 }}-- Artista: {{ disco.nombreArtista }}, Álbum: {{ disco.nombreALbum }}
        <v-btn  color="red" @click="eliminarDisco(index)" rounded>ELiminar Disco</v-btn>

      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['artistas','discos']),
  },
  data() {
    return {
      nombreDisco: "",
      artistaSeleccionado: null,
    };
  },
  methods:{
    ...mapMutations(['agregarDisco']),

    guardarDisco(){
      const Disco={
        nombreArtista:this.artistaSeleccionado,
        nombreALbum:this.nombreDisco,
      }
      this.agregarDisco(Disco);
      this.nombreDisco="";
      this.artistaSeleccionado=null;
     },
     eliminarDisco(index){
      this.discos.splice(index,1);

     }

  }
}

</script>
