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
    alert('Email er kopiert til utklippstavlen!');
  } catch (error) {
    console.error('Failed to copy text: ', error);
  }
};
</script>

<template>
  <div @click="copyText" class="container">
    <VIcon v-if="icon" class="icon">{{ icon }}</VIcon>
    <span class="text">{{ text }}</span>
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