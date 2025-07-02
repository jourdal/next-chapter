<template>
  <VFooter app>
    <VRow class="footer">
      <VCol class="link-container left">
        <NuxtLink class="link" to="https://open.spotify.com/show/5HanrQebYK5aBJFeut5Gtm?si=a59bfe86c5084eaa">
          <VIcon class="icon">mdi-spotify</VIcon>
          <span class="text">Podcast</span>
        </NuxtLink>
      </VCol>
      <VCol class="link-container middle">
        <CopyText class="copy-text" text="contact@nextchapter.space" icon="mdi-email"/>
      </VCol>
      <VCol class="link-container right">
        <NuxtLink class="link" to="https://www.instagram.com/VentureVeb">
          <VIcon class="icon">mdi-instagram</VIcon>
          <span class="text">VentureVeb</span>
        </NuxtLink>
      </VCol>
    </VRow>
  </VFooter>
</template>

<style scoped>
.footer {
  align-items: center;
  display: flex;

  .link-container {
    display: flex;
    gap: 0.25rem;

    .link {
      align-items: center;
      color: inherit;
      display: flex;
      gap: 0.25rem;
      list-style: none;
      text-decoration: none;
    }
  }

  .middle {
    justify-content: center;
  }

  .right {
    justify-content: flex-end;
  }
}

@media (max-width: 600px) {
  .text {
    display: none;
  }
}
</style>
<script setup lang="ts">
</script>