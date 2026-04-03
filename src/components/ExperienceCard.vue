<script setup lang="ts">
import type { Experience } from '../types/experience'

defineProps<{
  experience: Experience
}>()
</script>

<template>
  <article class="card">
    <img class="card-image" :src="experience.image" :alt="experience.title" />

    <div class="card-body">
      <div class="card-top">
        <span class="badge">{{ experience.category }}</span>
        <span class="rating">⭐ {{ experience.rating }}</span>
      </div>

      <h3 class="card-title">{{ experience.title }}</h3>
      <p class="card-location">{{ experience.location }}</p>
      <p class="card-duration">{{ experience.duration }}</p>

      <div class="card-footer">
        <p class="card-price">€{{ experience.price }}</p>
      </div>
    </div>
  </article>
</template>
