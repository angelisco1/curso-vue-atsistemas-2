<template>
  <div>
    <p v-if="seMuestra">Se muestra si seMuestra=true</p>
    <p v-else>Se muestra si seMuestra=false</p>

    <p v-if="nota > 5">Has aprobado</p>
    <p v-else-if="nota == 5">Has aprobado raspando</p>
    <p v-else>Has suspendido</p>

    <p v-show="seMuestra">Se oculta si seMuestra=false</p>

    <ul>
      <li v-for="(mascota, i) in mascotas" :key="mascota.id">{{i}}: {{mascota.nombre}}</li>
    </ul>

    <p v-marcar="'blue'">Texto marcado en azul</p>
    <p v-marcar>Texto marcado en amarillo</p>
    <p v-marcar.blink="'orange'">Texto marcado en naranja</p>
    <p v-pass v-marcar.blink>Texto marcado en naranja</p>


    <input v-powermode type="text">
  </div>
</template>

<script>
export default {
  data() {
    return {
      seMuestra: false,
      codigoHtml: '<strong>Este texto está en negrita</strong>',
      mascotas: [
        {id: 1, nombre: 'Periquito'},
        {id: 2, nombre: 'Canario'},
        {id: 3, nombre: 'Tortuga'},
        {id: 4, nombre: 'Periquito'},
      ],
      nota: 6,
    }
  },
  directives: {
    marcar: {
      bind(el, bindings, vnode) {
        console.log(bindings);
        const color = bindings.value || 'yellow';

        if (bindings.modifiers.blink) {
          setTimeout
          setInterval(() => {
            el.style.backgroundColor = el.style.backgroundColor === 'white' ? color : 'white';
          }, 300)
        } else {
          el.addEventListener('mouseover', () => {
            if (color) {
              el.style.backgroundColor = color;
            } else {
              el.style.backgroundColor = 'yellow';
            }
            // el.style.backgroundColor = color || 'yellow';
          })

          el.addEventListener('mouseout', () => {
            el.style.backgroundColor = 'white';
          })
        }

      }
    }
  }
}
</script>

<style>

</style>