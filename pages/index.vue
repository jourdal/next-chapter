<script setup lang="ts">
</script>

<template>
  <div class="container">
    <iframe class="instagram-video" :src="`https://www.instagram.com/p/DESEDPBNUHh/embed`" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
  </div>
</template>

<style scoped>
.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  height: calc(100vh - var(--header-height) - var(--footer-height));

  .instagram-video {
    border: 0;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  }
}

@media (max-width: 600px) {
  .instagram-video {
    width: 300px;
    height: 360px;
  }
}
</style>