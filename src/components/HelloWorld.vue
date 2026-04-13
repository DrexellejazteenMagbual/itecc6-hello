<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

 

  <p>
    See more on
    <a href="https://github.com/DrexellejazteenMagbual" target="_blank"
      >Github</a
    >, for more repositories and projects.
  </p>
  <p>
    Learn more about me in 
    <a
      href="https://www.facebook.com/AkioTakanashi.1.2"
      target="_blank"
      >to learn more about me.</a
    >.
  </p>
  <p class="read-the-docs">have a nice day, programmers.</p>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
