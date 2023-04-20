<script setup lang="ts"> 
import { ref } from 'vue';

document.title = "URL Shortener"

const longUrl = ref('')
const isSubmitted = ref(false)

const onSubmit = () => {
  isSubmitted.value = true
  console.log(`LongUrl: ${longUrl.value}`)
}
</script>

<template>
   <div>
    <form @submit.prevent="onSubmit">
      <label for="long-url">Long URL:</label>
      <input id="long-url" type="text" v-model="longUrl" required @click="longUrl = ''">
      <button type="submit">Shorten</button>
    </form>
    <h2 class="urlh2">Long URL:</h2>
    <h2 class="urlh2" v-if="isSubmitted">{{ longUrl }}</h2>
  </div>
</template>

<style scoped>
.urlh2 {
  display: inline;
}
</style> 

<!-- <template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="long-url">Long URL:</label>
      <input id="long-url" type="text" v-model="longUrl" required @click="clearLongUrl">
      <button type="submit">Shorten</button>
    </form>
    <h1 v-if="isSubmitted">Long URL:</h1>
    <h2 v-if="isSubmitted"> {{ longUrl }}</h2>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

document.title = "URL Shortener"

const longUrl = ref('')
const isSubmitted = ref(false)

const onSubmit = () => {
  console.log(`LongUrl: ${longUrl.value}`)
  isSubmitted.value = true
}

const clearLongUrl = () => {
  longUrl.value = '';
}
</script> --> -->
