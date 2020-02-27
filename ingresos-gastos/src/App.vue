<template>
  <div>
    <h1>Ingresos y gastos</h1>
    <cmp-nav></cmp-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
  components: {
    'cmp-nav': Nav
  }
}
</script>

<style>

</style>