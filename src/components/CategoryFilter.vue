<script setup lang="ts">
import type { Category } from '@/types/experience'

type CategoryOption = 'All' | Category

defineProps<{
  categories: CategoryOption[]
}>()

const model = defineModel<CategoryOption>({ required: true })
</script>

<template>
  <div class="filter-group">
    <p class="filter-label">Categories</p>
    <div class="category-list">
      <button
        v-for="category in categories"
        :key="category"
        type="button"
        class="category-button"
        :class="{ active: model === category }"
        @click="model = category"
      >
        {{ category }}
      </button>
    </div>
  </div>
</template>
