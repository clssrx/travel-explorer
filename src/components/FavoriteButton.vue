<script setup lang="ts">
import { computed } from 'vue'
import { useFavoritesStore } from '../stores/favorites'

const props = defineProps<{
  experienceId: number
}>()

const favoritesStore = useFavoritesStore()

const active = computed(() => favoritesStore.isFavorite(props.experienceId))

function handleClick() {
  favoritesStore.toggleFavorite(props.experienceId)
}
</script>

<template>
  <button
    type="button"
    class="favorite-button"
    :class="{ active }"
    :aria-pressed="active"
    @click.stop="handleClick"
  >
    {{ active ? '♥ Saved' : '♡ Save' }}
  </button>
</template>

<style scoped>
.favorite-button {
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 0.55rem 0.9rem;
  background: var(--color-background-soft);
  color: var(--color-heading);
  font-weight: 700;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
}

.favorite-button:hover {
  transform: translateY(-1px);
  border-color: var(--color-border-hover);
}

.favorite-button.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
  box-shadow: 0 8px 18px rgba(231, 111, 81, 0.2);
}
</style>
