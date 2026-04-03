<script setup lang="ts">
import ExperienceCard from './components/ExperienceCard.vue'
import { experiences } from './data/experiences'
</script>

<template>
  <main class="app">
    <section class="hero">
      <p class="eyebrow">Vue 3 + TypeScript</p>
      <h1>Travel Explorer</h1>
      <p class="subtitle">Discover curated travel experiences around the world.</p>
    </section>

    <section class="section">
      <div class="section-heading">
        <h2>Popular experiences</h2>
        <p>Browse a small curated catalog of trips, tours, and activities.</p>
      </div>
    </section>
    <ExperienceCard :experiences="experiences" />
  </main>
</template>
