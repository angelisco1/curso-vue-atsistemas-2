<template>
  <div>
    <p>Me llamo: {{miNombre}}</p>
    <button type="button" @click="cambiarNombre">Cambiar nombre de Leia</button>
  </div>
</template>

<script>
import { EventBus } from '../../main';

export default {
  props: {
    miNombre: String,
  },
  methods: {
    cambiarNombre(event) {
      // this.miNombre = 'Leia 2';
      this.$emit('nombreCambiado', 'Leia 2')
      EventBus.emiteNombre('Leia 3');
    }
  }
}
</script>

<style>

</style>