<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: false
  }
});

const snackbar = ref(false);

const copyText = async () => {
  try {
    await navigator.clipboard.writeText(props.text);
    snackbar.value = true;
  } catch (error) {
    console.error('Failed to copy text: ', error);
  }
};
</script>

<template>
  <div>
    <div @click="copyText" class="container">
      <VIcon v-if="icon" class="icon">{{ icon }}</VIcon>
      <span class="text">{{ text }}</span>
    </div>

    <VSnackbar v-model="snackbar" color="success" location="bottom left">
      <strong>contact@nextchapter.space is copied to the clipboard!</strong>

      <template v-slot:actions>
        <VBtn icon="mdi-close" @click="snackbar = false" />
      </template>
    </VSnackbar>
  </div>
</template>

<style scoped>
.container {
  align-items: center;
  display: flex;
  cursor: pointer;

  .icon {
    margin-right: 0.5rem;
  }
}

@media (max-width: 600px) {
  .text {
    display: none;
  }
}
</style>