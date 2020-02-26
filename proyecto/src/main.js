import Vue from 'vue'
import App from './App.vue'
import './cosas-globales';

Vue.config.productionTip = false

export const EventBus = new Vue({
  methods: {
    emiteNombre(nombre) {
      this.$emit('nombreCambiado2', nombre);
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')