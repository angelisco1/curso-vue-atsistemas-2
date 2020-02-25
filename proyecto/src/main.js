import Vue from 'vue'
import App from './App.vue'
import CmpGlobal from './components/CmpGlobal.vue';

Vue.config.productionTip = false

Vue.component('cmp-global', CmpGlobal);

Vue.directive('pass', {
  bind(el, bindings, vnode) {
    let val = el.textContent;
    val = val.replace(/\w/g, '*');
    el.textContent = val;
  }
});

Vue.directive('powermode', {
  bind(el, bindings, vnode) {
    el.addEventListener('input', () => {
      const num = Math.floor(Math.random()*256);
      el.style.color = `rgb(${num}, ${num}, ${num})`;
      // el.style.marginLeft = Number(el.style.marginLeft.replace('px', '')) + 5 + 'px';
      el.style.marginLeft = '10px';
      el.style.marginTop = '10px';
      setTimeout(() => {
        el.style.color = 'black';
        el.style.marginLeft = '0px';
        el.style.marginTop = '0px';
      }, 300)
    })
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
