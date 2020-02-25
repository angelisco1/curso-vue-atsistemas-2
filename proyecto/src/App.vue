<template>
  <div>
    <!-- <h1>{{msg}}</h1> -->
    <!-- <p>Me llamo {{nombre}}</p> -->
    <!-- <app-contador></app-contador> -->
    <!-- <cmp-global></cmp-global> -->
    <cmp-directivas></cmp-directivas>
  </div>
</template>

<script>
import Contador from './components/Contador.vue';
import CmpDirectivas from './components/directivas/CmpDirectivas.vue';
export default {
  components: {
    'app-contador': Contador,
    'cmp-directivas': CmpDirectivas
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