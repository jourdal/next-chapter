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
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
</style>