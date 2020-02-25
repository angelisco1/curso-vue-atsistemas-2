<template>
  <div>
    <h1>{{msg}}</h1>
    <p>Me llamo {{nombre}}</p>
    <app-contador></app-contador>
  </div>
</template>

<script>
import Contador from './components/Contador.vue';
export default {
  components: {
    'app-contador': Contador
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