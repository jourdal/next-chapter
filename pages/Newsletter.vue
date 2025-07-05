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
        snackbarText.value = 'You are now subscribed 🚀 remember to check your spam folder!';
        snackbarColor.value = 'success';
        snackbar.value = true;
      } else if (response.status === 422) {
        snackbarText.value = 'This email is already subscribed.';
        snackbarColor.value = 'warning';
        snackbar.value = true;
      } else {
        const errorText = await response.text();
        console.error('Error signing up:', errorText);
        snackbarText.value = 'Something went wrong. Please try again later.';
        snackbarColor.value = 'error';
        snackbar.value = true;
      }
    } catch (error) {
      console.error('Error signing up:', error);
      snackbarText.value = 'Something went wrong. Please try again later.';
      snackbarColor.value = 'error';
      snackbar.value = true;
    }
  }
};
</script>

<template>
  <VContainer class="container">
    <VRow class="row" dense>
      <VCol cols="12" md="6" class="left-section">
        <h3>You don’t need to read five books, take a course, or spend hours on YouTube. All you need to do is open your inbox.</h3>
        <p>The Next Chapter Letter gives you honest glimpses into our journey – the wins, the wrong turns, and the small steps that actually make a difference. No filters. No glorification. Just real, tested experiences from someone building something new and trying to live a little freer along the way.</p>
        <input v-model="mail" type="email" placeholder="john.doe@email.com" class="text-field" />
        <VBtn variant="tonal" rounded="xl" @click="signup" :disabled="!isEmailValid">Subscribe</VBtn>
      </VCol>
      <VCol cols="12" md="6">
      </VCol>
    </VRow>
  </VContainer>


  <VSnackbar v-model="snackbar" :color="snackbarColor" location="bottom left">
    <strong>{{ snackbarText }}</strong>

    <template v-slot:actions>
      <VBtn icon="mdi-close" @click="snackbar = false" />
    </template>
  </VSnackbar>

  <VDivider class="divider" />
</template>

<style scoped>
.container {
  align-items: center;
  display: flex;
  justify-content: center;
  padding-top: 2rem;

  .left-section {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;

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
}

.divider {
  margin: 2rem 0;
}
</style>