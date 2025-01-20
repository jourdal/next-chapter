<script setup lang="ts">
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
</script>

<template>
  <div class="layout-container">
    <Header />
    <div class="content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .content {
    flex: 1;
  }
}

@media (max-width: 600px) {
  .layout-container {
    padding: 1rem;
  }
}
</style>