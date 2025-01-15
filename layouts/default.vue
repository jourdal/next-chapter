<script setup lang="ts">
import Header from '~/pages/Header.vue';
import Footer from '~/pages/Footer.vue';
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
}

.content {
  flex: 1;
}
</style>