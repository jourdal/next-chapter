<script setup lang="ts">
import { ref } from 'vue';
import { ContentItem, Episode} from '~/types/content';

const { data: podcastEpisodes, error: podcastError } = await useFetch<Episode[]>('/api/podcast')

const contentItems = ref<ContentItem[]>([]);

if (podcastEpisodes.value) {
  contentItems.value.push(...podcastEpisodes.value.map(episode => {
    const trimmedDescription = episode.description?.split(/Kontakt/)[0].trim();
    return {
      type: 'podcast' as const,
      title: episode.title,
      body: trimmedDescription,
      publishDate: episode.publishDate,
    };
  }));
}

const getIcon = computed(() => {
  return (item: ContentItem) => {
    return item.type === 'podcast' ? 'mdi-microphone' : 'mdi-fountain-pen';
  };
});
</script>

<template>
  <Banner class="banner" />
  <VContainer class="container">
    <div v-if="podcastError">Noe gikk galt med lasting av podcast episoder 😢</div>
    <div v-else>
      <div v-for="item in contentItems" :key="item.title" class="episode">
        <VCard
            :prepend-icon="getIcon(item)"
            variant="tonal" :title="item.title"
            :subtitle="new Date(item.publishDate).toLocaleDateString()"
            :text="item.body"
        >
          <template #actions>
            <VBtn v-if="item.type === 'podcast'" :href="`https://open.spotify.com/show/5HanrQebYK5aBJFeut5Gtm?si=a59bfe86c5084eaa`" variant="tonal">Lytt</VBtn>
          </template>
        </VCard>
      </div>
    </div>
  </VContainer>
</template>

<style scoped>
.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .episode {
    width: 100%;
    margin-bottom: 1rem;

  }
}
@media (max-width: 600px) {
  :deep(.v-card-title) {
    font-size: 1rem;
    white-space: normal;
  }
}
</style>