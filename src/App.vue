<script setup></script>

<template>
  <div class="main">
    <Navbar />

    <main class="main__content"><RouterView /></main>
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  display: grid;

  @include sm {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  @include md {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  @include lg {
    padding: 1rem;
    grid-template-columns: 25% 75%;
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
