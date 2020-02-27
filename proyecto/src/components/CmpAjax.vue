<template>
  <div>
    <p v-for="frase in frases" :key="frase.id">{{frase.joke}}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      url: 'http://api.icndb.com/jokes/random/3',
      frases: []
    }
  },
  created() {
    axios.get(this.url)
      .then(resp => {
        // console.log(resp);
        this.frases = resp.data.value;
      })
  }
}
</script>

<style>

</style>