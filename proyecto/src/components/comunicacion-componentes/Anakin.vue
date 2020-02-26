<template>
  <div>
    <p>Me llamo: {{miNombre}}</p>
    <p>Me llamo: {{nombreHija}}</p>
    <cmp-leia :style="{border: '1px solid blue', backgroundColor: 'lightblue'}" :miNombre="nombreHija" @nombreCambiado="cambiarNombre"></cmp-leia>
    <cmp-luke  :class="{conBorde: false, letraNaranja: true}" :miNombre="nombreHijo"></cmp-luke>
    <cmp-luke></cmp-luke>
    <!-- <cmp-luke :miNombre="6"></cmp-luke> -->
  </div>
</template>

<script>
import Leia from './Leia.vue'
import Luke from './Luke.vue'
export default {
  components: {
    'cmp-leia': Leia,
    'cmp-luke': Luke,
  },
  data() {
    return {
      miNombre: 'Anakin',
      nombreHija: 'Leia',
      nombreHijo: 'Luke'
    }
  },
  methods: {
    cambiarNombre(nuevoNombre) {
      this.nombreHija = nuevoNombre;
    }
  }
}
</script>

<style>
  .conBorde {
    border: 1px solid orange;
  }

  .letraNaranja {
    color: orange;
  }
</style>