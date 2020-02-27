<template>
  <div>
    <h2>Home</h2>
    <ul>
      <li v-for="concepto in conceptos" :key="concepto.id">
        {{concepto.concepto}}: {{concepto.cantidad}}
        <router-link :to="'/editar-concepto/'+concepto.id">Editar</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // conceptos() {
    //   return this.$store.getters.conceptos;
    // }
    ...mapGetters(['conceptos'])
  }
}
</script>

<style>

</style>