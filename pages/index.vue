<script setup lang="ts">
import { ref } from 'vue';
import { ContentItem, Episode } from '~/types/content';

const { data: podcastEpisodes, error: podcastError } = await useFetch<Episode[]>('/api/podcast');

const contentItems = ref<ContentItem[]>([]);
const expanded = ref<Record<string, boolean>>({});

if (podcastEpisodes.value) {
  contentItems.value.push(...podcastEpisodes.value.map(episode => {
    const trimmedDescription = episode.description?.split(/Kontakt/)[0].trim();
    return {
      type: 'podcast' as const,
      title: episode.title,
      body: trimmedDescription,
      publishDate: new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }).format(new Date(episode.publishDate)),
    };
  }));
}

const getIcon = computed(() => {
  return (item: ContentItem) => {
    return item.type === 'podcast' ? 'mdi-microphone' : 'mdi-fountain-pen';
  };
});

const toggleReadMore = (title: string) => {
  expanded.value[title] = !expanded.value[title];
};
</script>

<template>
  <Banner class="banner" />
  <VContainer class="container">
    <div v-if="podcastError">Noe gikk galt med lasting av podcast episoder 😢</div>
    <div v-else>
      <div v-for="item in contentItems" :key="item.title" class="item">
        <VCard
            :prepend-icon="getIcon(item)"
            variant="tonal"
            :title="item.title"
            :subtitle="item.publishDate"
        >
          <div
              class="card-body"
              :class="{ expanded: expanded[item.title] }"
          >
            {{ item.body }}
          </div>
          <template #actions>
            <VBtn
                variant="text"
                rounded="xl"
                :prepend-icon="expanded[item.title] ? 'mdi-arrow-up' : 'mdi-arrow-down'"
                @click="toggleReadMore(item.title)"
            >
              {{ expanded[item.title] ? 'Les mindre' : 'Les mer' }}
            </VBtn>
            <VBtn
                v-if="item.type === 'podcast'"
                variant="tonal"
                rounded="xl"
                prepend-icon="mdi-headphones"
                :href="`https://open.spotify.com/show/5HanrQebYK5aBJFeut5Gtm?si=a59bfe86c5084eaa`"
                target="_blank"
                rel="noopener noreferrer"
            >
              Lytt
            </VBtn>
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

  .item {
    width: 100%;
    margin-bottom: 1rem;

    :deep(.v-card-title) {
      white-space: normal;
    }
  }
}

.card-body {
  max-height: 5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: max-height 0.3s ease;
  padding: 0.5rem 1rem;
}

.card-body.expanded {
  max-height: none;
}

@media (max-width: 600px) {
  :deep(.v-card-title) {
    font-size: 1rem;
    white-space: normal;
  }
}
</style>