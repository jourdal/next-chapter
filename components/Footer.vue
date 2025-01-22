<script setup lang="ts">
import CopyText from '~/components/CopyText.vue';

const instagramIcon = '/svg/icons8-instagram.svg';
const snapchatIcon = '/svg/icons8-snapchat.svg';
const mailIcon = '/svg/icons8-mail.svg';
</script>

<template>
  <footer class="footer">
    <div class="link-container">
      <NuxtLink class="link" to="https://www.instagram.com/VentureVeb">
        <img :src="instagramIcon" alt="Instagram" />
        VentureVeb
      </NuxtLink>
    </div>
    <div class="link-container">
      <img :src="mailIcon" alt="Mail" />
      <CopyText text="Contact@nextchapter.space" />
    </div>
    <div class="link-container">
      <NuxtLink class="link" to="https://www.snapchat.com/add/VentureVeb">
        <img :src="snapchatIcon" alt="Snapchat" />
        VentureVeb
      </NuxtLink>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  align-items: center;
  display: flex;
  justify-content: space-evenly;

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
}

@media (max-width: 600px) {
  .footer {
    flex-direction: column;
  }
}
</style>