<template>
  <div>
    <h2>Nuevo Concepto</h2>
    <form @submit="guardar">
      <div>
        <label for="concepto">Concepto:</label>
        <input type="text" id="concepto" name="concepto" v-model="concepto">
      </div>
      <div>
        <label for="cantidad">Cantidad:</label>
        <input type="number" id="cantidad" name="cantidad" v-model.number="cantidad">
      </div>
      <button type="submit">Guardar</button>
      <button type="button" @click="volver">Volver</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  created() {
    const id = this.$route.params.id;// ? this.$route.params.id : null;
    if (id) {
      const concepto = this.$store.getters.getConcepto(id);
      this.concepto = concepto.concepto;
      this.cantidad = concepto.cantidad;
      this.id = id;
    }
  },
  data() {
    return {
      concepto: '',
      cantidad: 0,
      id: null
    }
  },
  methods: {
    ...mapActions({
      guardarAction: 'guardar',
      updateAction: 'update'
    }),
    guardar(event) {
      console.log(this.$router)
      event.preventDefault();
      // Aquí guardaremos los datos
      // this.$store.dispatch('guardar', {concepto: this.concepto, cantidad: this.cantidad});
      if (this.id) {
        this.updateAction({id: this.id, concepto: this.concepto, cantidad: this.cantidad})
      } else {
        this.guardarAction({concepto: this.concepto, cantidad: this.cantidad})
      }

      this.$router.push('/');
    },
    volver(event) {
      // this.$router.go(-1);
      this.$router.back();
    }
  }
}
</script>

<style>

</style>