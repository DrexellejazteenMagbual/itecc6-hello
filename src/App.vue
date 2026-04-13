<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="../src/assets/finalpic.jpg" class="logo" alt="Vite logo"/>
    </a>
    
  </div>

  <HelloWorld msg="Drexelle Jazteen F. Magbual" />
  

</template>

<style scoped>
.logo {
  height: 10em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  border-radius: 50%;
}
.logo:hover {
  filter: drop-shadow(0 0 5em #bd0b0baa);
  
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
