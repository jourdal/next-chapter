<script setup lang="ts">
</script>

<template>
  <Banner />
  <VContainer class="container">
    HOME
  </VContainer>
</template>

<style scoped>
.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  height: calc(100vh - var(--header-height) - var(--footer-height));
}
</style>