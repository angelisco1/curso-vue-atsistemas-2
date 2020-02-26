<template>
  <div>
    <p>{{nombre}} {{apellido}}</p>
    <p>{{nombreCompleto}}</p>
    <input type="text" v-model="nombre">
    <input type="text" v-model="apellido">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      apellido: '',
      precio: 4,
      msg: 'Validando...'
    }
  },
  computed: {
    nombreCompleto() {
      // console.log(this.$data);
      return this.nombre + ' ' + this.apellido;
    }
  },
  watch: {

  }
}
</script>

<style>

</style>