<template>
  <VApp>
    <Header />
      <VMain class="layout-container">
        <VContainer class="content">
          <slot />
        </VContainer>
      </VMain>
    <Footer />
  </VApp>
</template>

<style scoped>
.layout-container {
  max-height: calc(100vh - var(--header-height) - var(--footer-height));
}
</style>