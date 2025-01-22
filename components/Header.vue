<script setup lang="ts">
import { NuxtLink } from '#components';
import logo from 'public/logo_no_background.png';

</script>

<template>
  <header class="header">
    <div class="logo">
      <img :src="logo" alt="Logo" />
      <h2>NextChapter</h2>
    </div>
    <div class="navigation">
      <nav>
        <ul class="link-container">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/newsletter">Newsletter</NuxtLink></li>
        </ul>
      </nav>
      <DarkModeToggle/>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .logo {
    display: flex;

    img {
      width: 80px;
      height: auto;
    }
  }

  .navigation {
    display: flex;
    align-items: center;
    gap: 1rem;

    .link-container {
      list-style: none;
      display: flex;
      gap: 1rem;
      padding-left: 0;

      a {
        text-decoration: none;
        color: inherit;
        font-size: 1.25rem;
      }
    }
  }
}

@media (max-width: 600px) {
  .logo img {
    width: 40px;
  }

  .logo h2 {
    font-size: 1rem;
  }

  .link-container a {
    font-size: 0.75rem;
  }
}
</style>