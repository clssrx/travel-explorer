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
  </div>
</template>
