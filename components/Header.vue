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
      <DarkModeToggle class="toggle"/>
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
    align-items: center;

    img {
      width: 80px;
      height: auto;
    }
  }

  .navigation {
    align-items: center;
    display: flex;
    gap: 1rem;
    justify-content: center;

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
  .header {
    justify-content: space-between;
  }
  .logo img {
    width: 40px !important;
  }

  h2 {
    font-size: 1rem;
  }

  .navigation {
    gap: 0.5rem !important;

    .link-container {
      gap: 0.25rem !important;
    }

    a {
      font-size: 0.625rem !important;
    }
  }
}
</style>