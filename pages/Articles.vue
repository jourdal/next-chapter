<script setup lang="ts">
import { formatDate } from "~/utils/formatDate";

const route = useRoute()
const { data: blogposts } = await useAsyncData(route.path, async () => {
  const posts = await queryCollection('blog').all();
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
})

const search = ref('')

const filteredPosts = computed(() => {
  if (!search.value) return blogposts.value || []

  return (blogposts.value || []).filter(post =>
      post.title.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<template>
  <VTextField
      v-model="search"
      prepend-inner-icon="mdi-magnify"
      label="Search articles..."
      variant="outlined"
      clearable
      hide-details
      class="search-field"
  />

  <VDivider class="divider"/>

  <VContainer class="container">
    <VList>
      <VListItem
          v-for="post in filteredPosts"
          :key="post.id"
          :to="post.path"
          :title="post.title"
          :subtitle="formatDate(post.date)"
      />
    </VList>
  </VContainer>
</template>

<style scoped>
.search-field {
  margin: 2rem auto;
  max-width: 600px;
}

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