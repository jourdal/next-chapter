<script setup lang="ts">
import { inject, ref, watch, onMounted } from 'vue';
import { useTheme } from 'vuetify';

const isDarkMode = inject<Ref<boolean>>('isDarkMode', ref(false));
const theme = useTheme();

const setTheme = (mode: string) => {
  isDarkMode.value = mode === 'dark';
  theme.global.name.value = mode;
  sessionStorage.setItem('theme', mode);
};

watch(isDarkMode, (newVal) => {
  theme.global.name.value = newVal ? 'dark' : 'light';
});

onMounted(() => {
  const savedTheme = sessionStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  }
});
</script>

<template>
  <v-btn-toggle v-model="isDarkMode">
    <v-btn icon="mdi-weather-sunny" value="light" size="x-small" @click="setTheme('light')" />
    <v-btn icon="mdi-weather-night" value="dark" size="x-small" @click="setTheme('dark')" />
  </v-btn-toggle>
</template>