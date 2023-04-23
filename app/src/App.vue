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
        <div class="border-4 rounded w-2/4 h-2/4 bg-white border-indigo-600 p-4 max-h-full overflow-auto">
        <form class="grid grid-rows-2 grid-cols-6 mb-4" @submit.prevent="onSubmit">
          
          <label class="" for="long-url">Long URL:</label>
          <input class="border-2 rounded mr-2 mb-4  row-span-1 col-start-2 col-end-7" id="long-url" type="text" v-model="longUrl" required @click="longUrl = ''">
       
          <button class="bg-indigo-600 text-white rounded p-2 row-span-1 col-start-2 col-end-6" type="submit">Shorten</button>
        </form>
        <div class="grid grid-cols-7" v-if="isSubmitted">
        <label class="">Short URL:</label>
        <input class="col-start-3 col-end-7 border-2 rounded p-2" v-bind="{ href: shortUrl, target: '_blank' }" v-model="shortUrl">
        <button class="bg-red-600 text-white rounded p-1 mt-2 col-start-3 col-end-7" @click="copyShortUrlToClipboard">Copy Link</button>
        </div>
      </div>
    </div>
</template>

