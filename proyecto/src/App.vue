<template>
  <div>
    <!-- <h1>{{msg}}</h1> -->
    <!-- <p>Me llamo {{nombre}}</p> -->
    <!-- <app-contador></app-contador> -->
    <!-- <cmp-global></cmp-global> -->
    <!-- <cmp-directivas></cmp-directivas> -->
    <cmp-otras-opciones></cmp-otras-opciones>
  </div>
</template>

<script>
import Contador from './components/Contador.vue';
import CmpDirectivas from './components/directivas/CmpDirectivas.vue';
import CmpOtrasOpciones from './components/CmpOtrasOpciones.vue';

export default {
  components: {
    'app-contador': Contador,
    'cmp-directivas': CmpDirectivas,
    'cmp-otras-opciones': CmpOtrasOpciones
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