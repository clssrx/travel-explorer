<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useFavoritesStore } from './stores/favorites'

const favoritesStore = useFavoritesStore()
</script>

<template>
  <div class="app-shell">
    <header class="site-header">
      <div class="site-header-inner">
        <RouterLink class="brand" to="/">Travel Explorer</RouterLink>

        <nav class="nav">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/favorites">Favorites ({{ favoritesStore.favoritesCount }})</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />

    <footer class="site-footer">
      <div class="site-footer-inner">
        <p>Built with Vue 3, TypeScript, Vue Router, and Pinia.</p>
      </div>
    </footer>
  </div>
</template>
