<script setup lang="ts">

</script>

<template>
  <VContainer class="container">
    <p class="text">Do you have feedback, suggestions, or just something you want to share?</p>
    <p class="text">We really appreciate all feedback!</p>
    <span>Send us an email at <CopyText class="copy-text" text="contact@nextchapter.space" />.</span>
  </VContainer>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  gap: 0.5rem;
  text-align: center;

  .copy-text {
    display: inline-flex;
  }
}
</style>