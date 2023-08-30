<template>
  <header>
    <h2>{{ heading }}</h2>
    <p>{{ subtitle }}</p>
  </header>
</template>

<script setup>
defineProps({
  heading: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
h2 {
  font-size: 2rem;
  color: $color-marine-blue;
}
p {
  color: $color-cool-gray;
}
</style>
