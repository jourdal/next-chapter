<script setup lang="ts">
import { ref } from 'vue';
import logo from 'public/logo_no_background.png';

const drawer = ref(false);
</script>

<template>
  <VAppBar :elevation="2" app>
    <template v-slot:prepend>
      <VAppBarNavIcon @click="drawer = !drawer" />
    </template>

    <VSpacer />
    <VRow>
      <NuxtLink class="logo-title" to="/">
        <img :src=logo width="60" height="60" alt="logo"/>
        <VAppBarTitle class="title" text="NextChapter" />
      </NuxtLink>
    </VRow>


    <DarkModeToggle class="toggle"/>
  </VAppBar>

  <VNavigationDrawer v-model="drawer" :mobile="false" temporary>
    <VList>
      <VListItem>
        <NuxtLink to="/">Home</NuxtLink>
      </VListItem>
      <VListItem>
        <NuxtLink to="/newsletter">Newsletter</NuxtLink>
      </VListItem>
      <VListItem>
        <NuxtLink to="/articles">Articles</NuxtLink>
      </VListItem>
      <VListItem>
        <NuxtLink to="/podcast">Podcast [In Norwegian]</NuxtLink>
      </VListItem>
      <VListItem>
        <NuxtLink to="/aboutUs">About us</NuxtLink>
      </VListItem>
      <VListItem>
        <NuxtLink to="/feedback">Feedback</NuxtLink>
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<style scoped>
.logo-title {
  display: flex;
}

a {
  color: inherit;
  text-decoration: none;
}

.title {
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
}

.toggle {
  padding-right: 0.5rem;
}
</style>