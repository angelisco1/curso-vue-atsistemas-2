<template>
  <div>
    <p>Me llamo: {{miNombre}}</p>
    <p>Mi hermana se llama: {{nombreHermana}}</p>
  </div>
</template>

<script>
import { EventBus } from '../../main';

export default {
  props: {
    miNombre: {
      type: String,
      // default: 'Otro nombre',
      // required: true,
      // validator(val) {
      //   return val.length > 5;
      // }
    }
  },
  data() {
    return {
      nombreHermana: '???'
    }
  },
  created() {
    EventBus.$on('nombreCambiado2', (nombre) => {
      this.nombreHermana = nombre;
    })
  },
  beforeDestroy() {
    EventBus.$off('nombreCambiado2');
  }
}
</script>

<style>

</style>