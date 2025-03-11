<template>
  <VApp>
    <Header />
      <VMain class="layout-container">
        <slot />
      </VMain>
    <Footer />
  </VApp>
</template>

<style scoped>
.layout-container {
  max-height: calc(100vh - var(--header-height) - var(--footer-height));
  width: 100%;
}
</style>