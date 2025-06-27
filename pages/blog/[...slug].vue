<script setup lang="ts">
const route = useRoute()
const { data: blogpost } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first();
})
</script>

<template>
  <VContainer class="container">
    <ContentRenderer v-if="blogpost" :value="blogpost" class="content" />
  </VContainer>
</template>

<style scoped>
.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 75%;

  .content {
    white-space: pre-line;
    width: 100%;
  }
}

.container :deep(hr) {
  margin: 1rem 0;
}

@media (max-width: 600px) {
  .container {
    width: 100%;
    max-width: 100%;
    padding: 0 0.5rem;
  }
}
</style>