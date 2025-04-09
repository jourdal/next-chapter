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
        <NuxtLink to="/">Forside</NuxtLink>
      </VListItem>
      <VListItem>
        <NuxtLink to="/newsletter">Nyhetsbrev</NuxtLink>
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