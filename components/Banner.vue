<script setup lang="ts">
</script>

<template>
  <div class="banner">
    <span>Join the adventure – weekly newsletters straight to your inbox! </span>
    <VBtn variant="tonal" rounded="xl" append-icon="mdi-arrow-right" :to="{ path: '/newsletter' }" component="NuxtLink">Subscrie</VBtn>
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