<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isDarkMode = ref(false);

const applyTheme = (theme: string) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  // console.log(`Theme set to: ${theme}`);
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  applyTheme(isDarkMode.value ? 'dark' : 'light');
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark';
    applyTheme(savedTheme);
    // console.log(`Loaded saved theme: ${savedTheme}`);
  }
});
</script>

<template>
  <label class="switch">
    <input type="checkbox" :checked="isDarkMode" @change="toggleDarkMode">
    <span class="slider"></span>
  </label>
</template>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 26px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 26px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:checked + .slider:before {
  transform: translateX(20px);
}

@media (max-width: 600px) {
  .switch {
    width: 22.5px; /* 50% of 45px */
    height: 13px;  /* 50% of 26px */
  }

  .slider:before {
    width: 10px;  /* 50% of 20px */
    height: 10px; /* 50% of 20px */
    left: 1.5px;  /* 50% of 3px */
    bottom: 1.5px; /* 50% of 3px */
  }

  input:checked + .slider:before {
    transform: translateX(10px); /* 50% of 20px */
  }
}
</style>