import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Formulario from './components/Formulario.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/nuevo-concepto', component: Formulario },
    { path: '/editar-concepto/:id', component: Formulario }
  ]
});