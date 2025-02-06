<script setup lang="ts">
import logo from 'public/logo_no_background.png';
</script>

<template>
  <VAppBar app>
    <VRow class="header">
      <VCol class="left">
        <div class="logo-title">
          <img class="logo" :src="logo" alt="Logo" />
          <v-app-bar-title class="title">NextChapter</v-app-bar-title>
        </div>
        <div class="links-group">
          <NuxtLink class="link" to="/">Home</NuxtLink>
          <NuxtLink class="link" to="/newsletter">Newsletter</NuxtLink>
        </div>
      </VCol>
      <VCol class="right">
        <DarkModeToggle class="toggle" />
      </VCol>
    </VRow>
  </VAppBar>
</template>

<style scoped>
.header {
  align-items: center;
  display: flex;

  .left {
    align-items: center;
    display: flex;
    gap: 2rem;

    .logo-title {
      display: flex;
      align-items: center;

      .logo {
        height: auto;
        width: 60px;
      }

      .title {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }

    .links-group {
      align-items: center;
      display: flex;

      .link {
        color: inherit;
        text-decoration: none;
        padding: 0 1rem;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

@media (max-width: 600px) {
  .left {
    gap: 1rem !important;

    .logo {
      width: 30px !important;
    }

    .title {
      font-size: 0.75rem !important;
    }

    .link {
      font-size: 0.5rem !important;
      padding: 0 0.5rem !important;
    }
  }

  .toggle {
    transform: scale(0.5);
  }
}
</style>