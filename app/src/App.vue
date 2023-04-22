<script setup lang="ts"> 
import { ref } from 'vue';

document.title = "URL Shortener"

const longUrl = ref('')
const shortUrl = ref('')
const isSubmitted = ref(false)

const onSubmit = () => {
  isSubmitted.value = true
  console.log(`"origUrl": ${longUrl.value}`)
  fetch('http://localhost:3333/api/short', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "origUrl": longUrl.value
})
})
.then(response => response.json())
.then(data => shortUrl.value = data.shortUrl)
.catch(error => console.error(error));
}

const copyShortUrlToClipboard = () => {
  const el = document.createElement('textarea')
  el.value = shortUrl.value
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}
</script>

<template>
      <div class="flex justify-center items-center w-full h-screen">
        <div class="grid-rows-2 grid-cols-2 border-4 rounded w-2/4 h-2/4 bg-white border-indigo-600 p-4">
        <form class="mb-4" @submit.prevent="onSubmit">
          <div class="flex justify-center items-start p-2">
          <label class="mr-2" for="long-url">Long URL:</label>
          <input class="border-2 rounded w-3/4 mr-2 mb-4" id="long-url" type="text" v-model="longUrl" required @click="longUrl = ''">
        </div>
          <button class="bg-blue-400 border-4 rounded p-2 block ml-16 w-2/4" type="submit">Shorten</button>
        </form>
        <h2 class="urlh2">Short URL:</h2>
        <h2 class="mb-4" v-if="isSubmitted"><a v-bind="{ href: shortUrl, target: '_blank' }">{{ shortUrl }}</a></h2>
        <button class="bg-red-400 border-4 rounded p-2" @click="copyShortUrlToClipboard">Copy Link</button>
      </div>
    </div>
</template>

