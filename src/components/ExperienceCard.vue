<script setup lang="ts">
import FavoriteButton from './FavoriteButton.vue'
import type { Experience } from '../types/experience'

defineProps<{
  experience: Experience
}>()
</script>

<template>
  <article class="card">
    <RouterLink class="card-media-link" :to="`/experience/${experience.id}`">
      <img class="card-image" :src="experience.image" :alt="experience.title" />
    </RouterLink>

    <div class="card-body">
      <div class="card-top">
        <span class="badge">{{ experience.category }}</span>
        <span class="rating">⭐ {{ experience.rating }}</span>
      </div>

      <RouterLink class="card-title-link" :to="`/experience/${experience.id}`">
        <h3 class="card-title">{{ experience.title }}</h3>
      </RouterLink>

      <p class="card-location">{{ experience.location }}</p>
      <p class="card-duration">{{ experience.duration }}</p>

      <div class="card-footer">
        <p class="card-price">€{{ experience.price }}</p>
        <FavoriteButton :experience-id="experience.id" />
      </div>
    </div>
  </article>
</template>
