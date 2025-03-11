<script setup lang="ts">

</script>

<template>
  <div class="banner">
    <span>Bli med på eventyret – ukentlige oppdateringer rett i innboksen!</span>
    <VBtn variant="tonal" :to="{ path: '/newsletter' }" component="NuxtLink">Meld deg på</VBtn>
  </div>
</template>

<style scoped>
.banner {
  background-color: #D83E4E;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
}
</style>