<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/NavBar.vue'
</script>

<template>
  <header>
    <Suspense>
      <nav>
        <Navbar />
      </nav>
    </Suspense>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
