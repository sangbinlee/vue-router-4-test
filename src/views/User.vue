<template>
  <div class="about">
    <h1>This is an user page</h1>
    <p>User {{ $route.params.id }}</p>
    <div>User {{ id }}</div>
    <div>date {{ date }}</div>

    <VueDatePicker
      v-model="date"
      :format-locale="ko"
      format="yyyy-MM-dd"
      range multi-calendars="2"
    ></VueDatePicker>

    <VueDatePicker v-model="date"
                   :format-locale="ko"
                   format="yyyy-MM-dd"
                   range
                   multi-calendars="3" />
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { ko } from 'date-fns/locale'
defineProps({
  id: String,
})

const date = ref()

onMounted(() => {
  const startDate = new Date()
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7))
  date.value = [startDate, endDate]
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
