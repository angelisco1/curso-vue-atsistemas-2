<template>
  <div>
    <button type="button" @click="decrementar">-</button>
    <input type="text" :placeholder="cuenta">
    <span>Cuenta: {{cuenta}}</span>
    <input type="number" v-model.number="cuenta">
    <button type="button" @click="incrementar">+</button>
    <input type="number" :value="cuenta" @input="cambiaCuenta">
  </div>
</template>

<script>
export default {
  data() {
    return {
      cuenta: 0,
    }
  },
  methods: {
    cambiaCuenta(event) {
      this.cuenta = Number(event.target.value)
    },
    incrementar() {
      event.target.value
      this.cuenta += 1;
    },
    decrementar() {
      this.cuenta -= 1;
    }
  }
}
</script>

<style>

</style>