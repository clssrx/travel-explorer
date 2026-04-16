<script setup lang="ts">
const model = defineModel<string>({ required: true })
</script>

<template>
  <div class="search-group">
    <label class="filter-label" for="search">Search</label>
    <input
      id="search"
      v-model="model"
      class="search-input"
      type="text"
      placeholder="Search by title or location"
    />
  </div>
</template>
