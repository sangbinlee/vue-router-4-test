<template>
  <div class="about">
    <h1>This is an user page</h1>
    <p>User {{ $route.params.id }}</p>
    <div>User {{ id }}</div>
  </div>
</template>
<script setup>
defineProps({
  id: String,
})
</script>
<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
<style lang="scss">
h1 {
  color: green;

  &:hover {
    color: greenyellow;
  }
}
</style>
