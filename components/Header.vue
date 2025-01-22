<script setup lang="ts">
import { NuxtLink } from '#components';
import logo from 'public/logo_no_background.png';
</script>

<template>
  <header class="header">
    <div class="left">
      <div class="logo">
        <img :src="logo" alt="Logo" />
        <h2>NextChapter</h2>
      </div>
      <nav>
        <ul class="link-container">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/newsletter">Newsletter</NuxtLink></li>
        </ul>
      </nav>
    </div>
    <div class="right">
      <DarkModeToggle />
    </div>
  </header>
</template>

<style scoped>
.header {
  align-items: center;
  display: flex;

  .left {
    align-items: center;
    display: flex;
    gap: 2rem;

    .logo {
      align-items: center;
      display: flex;

      img {
        height: auto;
        width: 80px;
      }
    }

    .link-container {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      list-style: none;
      padding-left: 0;

      a {
        color: inherit;
        font-size: 1.25rem;
        text-decoration: none;
      }
    }
  }


  .right {
    margin-left: auto;
  }
}

@media (max-width: 600px) {
  .logo img {
    width: 40px !important;
  }

  h2 {
    font-size: 1rem;
  }

  .link-container {
    gap: 0.25rem !important;

    a {
      font-size: 0.625rem !important;
    }
  }
}
</style>