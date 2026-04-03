<script setup lang="ts">
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

      <div class="cards-grid">
        <article v-for="experience in experiences" :key="experience.id" class="card">
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
      </div>
    </section>
  </main>
</template>
