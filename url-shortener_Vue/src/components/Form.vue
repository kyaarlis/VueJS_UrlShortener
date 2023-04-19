<script setup lang="ts">
import { ref } from 'vue';

    const urlName = ref('');

    const handleSubmit = () => {
      // Handle form submission
      console.log(`URL: ${urlName.value}`);

</script>

<template>
    <form @submit.prevent="handleSubmit">
      <label>
        URL:
        <input v-model="urlName" type="text" required>
      </label>
   
      <button type="submit">Submit</button>
    </form>
  </template>
  
  