<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { experiences } from '../data/experiences'

const experience = computed(() => {
  const id = Number(useRoute().params.id)
  return experiences.find((exp) => exp.id === id)
})
</script>

<template>
  <main class="app">
    <section v-if="experience" class="section">
      <RouterLink class="back-link" to="/">← Back to experiences</RouterLink>

      <div class="detail-layout">
        <div>
          <img class="detail-image" :src="experience.image" :alt="experience.title" />
        </div>

        <div class="detail-content">
          <div class="card-top">
            <span class="badge">{{ experience.category }}</span>
            <span class="rating">⭐ {{ experience.rating }}</span>
          </div>

          <h1 class="detail-title">{{ experience.title }}</h1>
          <p class="detail-location">{{ experience.location }}</p>

          <div class="detail-meta">
            <span>{{ experience.duration }}</span>
            <span>€{{ experience.price }}</span>
          </div>

          <p class="detail-description">
            {{ experience.description }}
          </p>
        </div>
      </div>
    </section>

    <section v-else class="section">
      <div class="empty-state">
        <h3>Experience not found</h3>
        <p>The requested experience does not exist.</p>
        <RouterLink class="back-link" to="/">Go back home</RouterLink>
      </div>
    </section>
  </main>
</template>
