<template>
  <div>
    <p>{{nombre}} {{apellido}}</p>
    <p>{{nombreCompleto}}</p>
    <input type="text" v-model="nombre">
    <input type="text" v-model="apellido">
    <p>{{msg}}</p>
    <p>{{precio | doble | currency}}</p>
    <p>{{precio | currency('en-us')}}</p>
    <p>{{precio | currency('hgj')}}</p>
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
    nombre(newVal, oldVal) {
      const nombresValidos = ['arya', 'robb', 'rickon', 'sansa', 'bran', 'tony'];
      if (nombresValidos.includes(newVal.toLowerCase())) {
        this.msg = 'Valido';
      } else {
        this.msg = 'Invalido';
      }
    }
  },
  filters: {
    currency(val, locale = 'es') {
      switch(locale) {
        case 'es':
          return val + '€';
        case 'en-us':
          return val + '$';
        default:
          return val + '?';
      }
    }
  }
}
</script>

<style>

</style>