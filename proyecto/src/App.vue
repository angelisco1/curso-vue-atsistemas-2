<template>
  <div>
    <!-- <h1>{{msg}}</h1> -->
    <!-- <p>Me llamo {{nombre}}</p> -->
    <!-- <app-contador></app-contador> -->
    <!-- <cmp-global></cmp-global> -->
    <!-- <cmp-directivas></cmp-directivas> -->
    <!-- <cmp-otras-opciones></cmp-otras-opciones> -->
    <!-- <cmp-anakin></cmp-anakin> -->
    <cmp-ajax></cmp-ajax>
  </div>
</template>

<script>
import Contador from './components/Contador.vue'
import CmpDirectivas from './components/directivas/CmpDirectivas.vue'
import CmpOtrasOpciones from './components/CmpOtrasOpciones.vue'
import Anakin from './components/comunicacion-componentes/Anakin.vue'
import CmpAjax from './components/CmpAjax.vue'

export default {
  components: {
    'app-contador': Contador,
    'cmp-directivas': CmpDirectivas,
    'cmp-otras-opciones': CmpOtrasOpciones,
    'cmp-anakin': Anakin,
    'cmp-ajax': CmpAjax,
  },
  data() {
    return {
      msg: 'Hola mundo...',
      nombre: 'Angel'
    }
  }
}
</script>

<style>

</style>