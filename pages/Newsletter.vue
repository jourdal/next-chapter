<script setup lang="ts">
import { ref, computed } from 'vue';
import { validateEmail } from '~/utils/validateEmail';

const mail = ref('');

const isEmailValid = computed(() => validateEmail(mail.value));

const signUp = async () => {
  if (isEmailValid.value) {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: mail.value }),
      });

      if (response.ok) {
        alert('Du er nå på listen! 🚀');
      } else {
        const errorText = await response.text();
        console.error('Error signing up:', errorText);
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  }
};
</script>

<template>
  <VContainer class="container">
    <h3 class="title">Bli med på eventyret – ukentlige oppdateringer rett i innboksen!</h3>
    <p>Vi utforsker startup-muligheter, sidehustles og nye måter å skape et enklere og bedre liv på, sammen.</p>
    <div>
      <h4>Hver uke deler jeg:</h4>
      <ul>
        <li class="text">Eksklusive innsikter fra prosjektene jeg bygger</li>
        <li class="text">Lærdommer og utfordringer fra startup-livet</li>
        <li class="text">Muligheten til å bli med på prosjektene – hvis du vil!</li>
      </ul>
    </div>
    <input v-model="mail" type="email" placeholder="perodd.tessem@gmail.com" class="text-field" />
    <VBtn variant="tonal" @click="signUp" :disabled="!isEmailValid">Meld deg på</VBtn>
  </VContainer>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  height: calc(100vh - var(--header-height) - var(--footer-height));

  .title {
    padding-bottom: 1rem;
  }

  .text {
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .text-field {
    width: 100%;
    max-width: 400px;
    padding: 0.5rem 0;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-bottom: 2px solid #D83E4E;
    }
  }
}
</style>