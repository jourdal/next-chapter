<script setup lang="ts">
</script>

<template>
  <div class="banner">
    <span>Weekly reflections from someone building a new life – and sharing the ride.</span>
    <VBtn variant="tonal" rounded="xl" append-icon="mdi-arrow-right" :to="{ path: '/newsletter' }" component="NuxtLink">Subscribe</VBtn>
  </div>
</template>

<style scoped>
.banner {
  background-color: #D83E4E;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;
}
</style>