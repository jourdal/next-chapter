<script setup lang="ts">
import { formatDate } from "~/utils/formatDate";

const route = useRoute()
const { data: blogposts } = await useAsyncData(route.path, async () => {
  const posts = await queryCollection('blog').all();
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
})
</script>

<template>
  <VDivider class="divider"/>

  <VContainer class="container">
    <VList>
      <VListItem
          v-for="post in blogposts"
          :key="post.id"
          :to="post.path"
          :title="post.title"
          :subtitle="formatDate(post.date)"
      />
    </VList>
  </VContainer>
</template>

<style scoped>

.divider {
  margin: 2rem 0;
}

.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  :deep(.v-list-item-title) {
    font-weight: bold;
  }
}
</style>