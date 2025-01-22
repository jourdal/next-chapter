<script setup lang="ts">
import { inject, ref, watch } from 'vue';
import { useTheme } from 'vuetify';

const isDarkMode = inject<Ref<boolean>>('isDarkMode', ref(false));
const theme = useTheme();

const setTheme = (mode: string) => {
  isDarkMode.value = mode === 'dark';
  theme.global.name.value = mode;
};

watch(isDarkMode, (newVal) => {
  theme.global.name.value = newVal ? 'dark' : 'light';
});
</script>

<template>
  <v-btn-toggle v-model="isDarkMode">
    <v-btn value="light" size="x-small" @click="setTheme('light')">
      <v-icon>mdi-weather-sunny</v-icon>
    </v-btn>
    <v-btn value="dark" size="x-small" @click="setTheme('dark')">
      <v-icon>mdi-weather-night</v-icon>
    </v-btn>
  </v-btn-toggle>
</template>