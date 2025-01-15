<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true
  }
});

const copyText = async () => {
  try {
    await navigator.clipboard.writeText(props.text);
    alert('Text copied to clipboard');
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};
</script>

<template>
  <span @click="copyText" class="copy-text">{{ text }}</span>
</template>

<style scoped>
.copy-text {
  align-items: center;
  display: flex;
  cursor: pointer;
}
</style>