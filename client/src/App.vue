<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/NavBar.vue'
</script>

<template>
  <header>
      <nav>
        <Navbar />
      </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
