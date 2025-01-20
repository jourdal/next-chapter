<script setup lang="ts">
</script>

<template>
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </Head>
    <NuxtLayout>
      <NuxtPage class="nuxt-page" />
    </NuxtLayout>
  </div>
</template>

<style scoped>
.nuxt-page {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
}

@media (max-width: 600px) {
  .nuxt-page {
    padding: 1rem;
  }
}
</style>