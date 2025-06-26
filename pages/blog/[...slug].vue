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
  }
}

.container :deep(hr) {
  margin: 1rem 0;
}
</style>