<script setup lang="ts">
import { ref } from 'vue';
import { ContentItem, Episode } from '~/types/content';
import { formatDate } from "~/utils/formatDate";

const { data: podcastEpisodes, error: podcastError } = await useFetch<Episode[]>('/api/podcast');

const contentItems = ref<ContentItem[]>([]);
const expanded = ref<Record<string, boolean>>({});

if (podcastEpisodes.value) {
  contentItems.value.push(
    ...podcastEpisodes.value
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
      .slice(0, 10)
      .map(episode => {
        const trimmedDescription = episode.description?.split(/Kontakt/)[0].trim();
        return {
          type: 'podcast' as const,
          title: episode.title,
          body: trimmedDescription,
          publishDate: formatDate(episode.publishDate),
        };
      })
  );
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
  <VContainer>
    <div v-if="podcastError">Noe gikk galt med lasting av podcast episoder 😢</div>
    <VRow v-else dense>
      <VCol
        v-for="item in contentItems"
        :key="item.title"
        cols="12"
        md="6"
        class="item-col"
      >
        <VCard
            :prepend-icon="getIcon(item)"
            variant="tonal"
            :title="item.title"
            :subtitle="item.publishDate"
            class="card"
            :class="{ expanded: expanded[item.title] }"
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
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped>
.item-col {
  display: flex;
  margin-bottom: 0.5rem;

  .card {
    display: flex;
    flex-direction: column;
    height: 18rem;
    transition: max-height 0.3s ease;
  }

  .card.expanded {
    height: auto;
  }

  :deep(.v-card-title) {
    white-space: normal;
  }

  .card-body {
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0.5rem 1rem;
  }
}

@media (max-width: 600px) {
  :deep(.v-card-title) {
    font-size: 1rem;
    white-space: normal;
  }
}
</style>