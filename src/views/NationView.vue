<template>
  <div class="about">
    <h1>This is an {{ this.$route.path }} page</h1>
    <p>User {{ this.$route.path }}</p>
    <!-- <p>User {{ this.$route }}</p> -->
    <!-- <p>User {{ this.$route.params.id }}</p> -->
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
