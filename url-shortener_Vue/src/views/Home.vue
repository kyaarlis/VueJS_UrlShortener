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
// console.log(`Short URL: ${data.shortUrl}`)
// shortUrl.value = data.shortUrl
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
   <div>
    <form @submit.prevent="onSubmit">
      <label for="long-url">Long URL:</label>
      <input id="long-url" type="text" v-model="longUrl" required @click="longUrl = ''">
      <button type="submit">Shorten</button>
    </form>
    <h2 class="urlh2">Short URL:</h2>
    <h2 class="urlh2" v-if="isSubmitted"><a v-bind="{ href: shortUrl, target: '_blank' }">{{ shortUrl }}</a></h2>
    <button @click="copyShortUrlToClipboard">Copy Link</button>
  </div>
</template>

<style scoped>
.urlh2 {
  display: inline;
}
</style> 


<style scoped>
body {
  background-color: red
}
</style>