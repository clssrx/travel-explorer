import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'

const STORAGE_KEY = 'travel-explorer-favorites'

function loadFavorites(): number[] {
  const stored = localStorage.getItem(STORAGE_KEY)

  if (!stored) {
    return []
  }

  try {
    const parsed = JSON.parse(stored)

    if (!Array.isArray(parsed)) {
      return []
    }

    return parsed.filter((id): id is number => typeof id === 'number')
  } catch {
    return []
  }
}

export const useFavoritesStore = defineStore('favorites', () => {
  const favoriteIds = ref<number[]>(loadFavorites())

  const favoritesCount = computed(() => favoriteIds.value.length)

  function isFavorite(id: number) {
    return favoriteIds.value.includes(id)
  }

  function addFavorite(id: number) {
    if (!favoriteIds.value.includes(id)) {
      favoriteIds.value.push(id)
    }
  }

  function removeFavorite(id: number) {
    favoriteIds.value = favoriteIds.value.filter((favoriteId) => favoriteId !== id)
  }

  function toggleFavorite(id: number) {
    if (isFavorite(id)) {
      removeFavorite(id)
    } else {
      addFavorite(id)
    }
  }

  watch(
    favoriteIds,
    (ids) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
    },
    { deep: true },
  )

  return {
    favoriteIds,
    favoritesCount,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
  }
})
