<script setup lang="ts">
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
  <span @click="copyText" class="copy-text">
    <VIcon v-if="icon" class="icon">{{ icon }}</VIcon>
    {{ text }}
  </span>
</template>

<style scoped>
.copy-text {
  align-items: center;
  display: flex;
  cursor: pointer;
}

.icon {
  margin-right: 0.5rem;
}
</style>