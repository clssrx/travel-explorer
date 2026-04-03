<script setup lang="ts">
import { computed, ref } from 'vue'
import ExperienceCard from '../components/ExperienceCard.vue'
import { experiences } from '../data/experiences'
import type { Category } from '../types/experience'
import SearchBar from '../components/SearchBar.vue'
import CategoryFilter from '@/components/CategoryFilter.vue'

type CategoryOption = 'All' | Category

const searchQuery = ref('')
const selectedCategory = ref<CategoryOption>('All')

const filteredExperiences = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return experiences.filter((experience) => {
    const matchesCategory =
      selectedCategory.value === 'All' || experience.category === selectedCategory.value

    const matchesSearch =
      query.length === 0 ||
      experience.title.toLowerCase().includes(query) ||
      experience.location.toLowerCase().includes(query)

    return matchesCategory && matchesSearch
  })
})
const categories: CategoryOption[] = ['All', 'Adventure', 'Culture', 'Food & Drink']
</script>

<template>
  <main class="app">
    <section class="hero">
      <p class="eyebrow">Vue 3 + TypeScript</p>
      <h1>Travel Explorer</h1>
      <p class="subtitle">Discover curated travel experiences around the world.</p>
    </section>

    <section class="section">
      <div class="filters-panel">
        <SearchBar v-model="searchQuery" />
        <CategoryFilter v-model="selectedCategory" :categories="categories" />
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <h2>Popular experiences</h2>
        <p>Browse a curated catalog of trips, tours, and activities.</p>
      </div>

      <div v-if="filteredExperiences.length" class="cards-grid">
        <ExperienceCard
          v-for="experience in filteredExperiences"
          :key="experience.id"
          :experience="experience"
        />
      </div>

      <div v-else class="empty-state">
        <h3>No experiences found</h3>
        <p>Try a different search term or category.</p>
      </div>
    </section>
  </main>
</template>
