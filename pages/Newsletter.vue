<script setup lang="ts">
import { ref, computed } from 'vue';
import { validateEmail } from '~/utils/validateEmail';

const mail = ref('');
const snackbar = ref(false);
const snackbarText = ref('');
const snackbarColor = ref('success');

const isEmailValid = computed(() => validateEmail(mail.value));

const signup = async () => {
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
        snackbarText.value = 'Du er nå på listen 🚀 husk å sjekke søppelpost!';
        snackbarColor.value = 'success';
        snackbar.value = true;
      } else if (response.status === 422) {
        snackbarText.value = 'Denne e-posten er allerede registrert.';
        snackbarColor.value = 'warning';
        snackbar.value = true;
      } else {
        const errorText = await response.text();
        console.error('Error signing up:', errorText);
        snackbarText.value = 'Noe gikk galt. Prøv igjen senere.';
        snackbarColor.value = 'error';
        snackbar.value = true;
      }
    } catch (error) {
      console.error('Error signing up:', error);
      snackbarText.value = 'Noe gikk galt. Prøv igjen senere.';
      snackbarColor.value = 'error';
      snackbar.value = true;
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
        <li class="bullet-point">Eksklusive innsikter fra prosjektene jeg bygger</li>
        <li class="bullet-point">Lærdommer og utfordringer fra startup-livet</li>
        <li class="bullet-point">Muligheten til å bli med på prosjektene – hvis du vil!</li>
      </ul>
    </div>
    <input v-model="mail" type="email" placeholder="perodd.tessem@gmail.com" class="text-field" />
    <VBtn variant="tonal" rounded="xl" @click="signup" :disabled="!isEmailValid">Meld deg på</VBtn>
  </VContainer>

  <VSnackbar v-model="snackbar" :color="snackbarColor" location="bottom left">
    <strong>{{ snackbarText }}</strong>

    <template v-slot:actions>
      <VBtn icon="mdi-close" @click="snackbar = false" />
    </template>
  </VSnackbar>

  <VDivider />
</template>

<style scoped>
.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  .title {
    padding-bottom: 1rem;
  }

  ul {
    list-style-position: inside;
  }

  .bullet-point {
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .text-field {
    width: 100%;
    max-width: 400px;
    padding: 0.5rem 0;
    border: none;
    border-bottom: 2px solid #ccc;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-bottom: 2px solid #D83E4E;
    }
  }
}
</style>