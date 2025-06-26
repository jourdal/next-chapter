<script setup lang="ts">
const route = useRoute()
const { data: blogposts } = await useAsyncData(route.path, () => {
  return queryCollection('blog').all();
})
</script>

<template>
  <VContainer class="container">
    <p v-for="post in blogposts" :key="post.id">
      <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
    </p>
  </VContainer>
</template>

<style scoped>
.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>