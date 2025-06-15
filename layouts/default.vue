<script setup lang="ts">
import { useHead } from 'nuxt/app';
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import { Analytics } from '@vercel/analytics/nuxt'

useHead({
  titleTemplate: 'NextChapter',
  meta: [
    { name: 'description', content: 'Default layout for the NextChapter app' },
  ],
});
</script>

<template>
  <VApp>
    <Header />
    <VMain class="layout-container" >
      <slot />
    </VMain>
    <Footer />
    <SpeedInsights />
    <Analytics />
  </VApp>
</template>