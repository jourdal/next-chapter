<script setup lang="ts">
const { data: podcastEpisodes, error } = await useFetch('/api/podcast')
</script>


<template>
  <Banner />
  <VContainer class="container">
    <div v-if="error">Noe gikk galt med lasting av podcast episoder 😢</div>
    <div v-else>
      <div v-for="episode in podcastEpisodes" class="episode">
        <h3>{{ episode.title }}</h3>
        <p>{{ episode.description }}</p>
        <p>Publisert {{ new Date(episode.pubDate).toLocaleDateString() }}</p>
      </div>
    </div>
  </VContainer>
</template>

<style scoped>
.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  height: calc(100vh - var(--header-height) - var(--footer-height));
}
</style>