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
  width: 100%;
}
</style>