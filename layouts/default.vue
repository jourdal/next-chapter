<template>
  <VApp>
    <Header />
    <VMain class="layout-container" >
      <slot />
    </VMain>
    <Footer />
  </VApp>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';

useHead({
  titleTemplate: 'NextChapter',
  meta: [
    { name: 'description', content: 'Default layout for the NextChapter app' },
  ],
});
</script>