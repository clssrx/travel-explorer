<script setup lang="ts">
import { computed } from 'vue'
import ExperienceCard from '../components/ExperienceCard.vue'
import { experiences } from '../data/experiences'
import { useFavoritesStore } from '../stores/favorites'

const favoritesStore = useFavoritesStore()

const favoriteExperiences = computed(() => {
  return experiences.filter((experience) => favoritesStore.favoriteIds.includes(experience.id))
})
</script>

<template>
  <main class="app">
    <section class="section">
      <div class="section-heading">
        <h1>Your favorites</h1>
        <p>Save experiences you want to revisit later.</p>
      </div>

      <div v-if="favoriteExperiences.length" class="cards-grid">
        <ExperienceCard
          v-for="experience in favoriteExperiences"
          :key="experience.id"
          :experience="experience"
        />
      </div>

      <div v-else class="empty-state">
        <h3>No favorites yet</h3>
        <p>Save a few experiences and they&apos;ll show up here.</p>
      </div>
    </section>
  </main>
</template>
