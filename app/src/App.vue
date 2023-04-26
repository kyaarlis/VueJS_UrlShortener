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
      <div class="flex justify-center items-center w-full h-screen" style="background-image: url('/src/assets/layered-steps-haikei (1).svg'); background-repeat: no-repeat; background-size: cover;">
        <div class="flex justify-start items-center flex-col  w-2/4 h-2/4 max-h-full overflow-auto">
        
        <form class="row g-3" @submit.prevent="onSubmit">
          <div class="col-auto">
            <input type="text" class="form-control" id="inputPassword2" placeholder="Long URL" v-model="longUrl" required @click="longUrl = ''">
          </div>
          <div class="col-auto">
            <button type="submit" class="bg-indigo-600 text-white rounded p-2 mb-3">Shorten!</button>
          </div>
        </form>
        <div class="flex justify-center items-center" v-if="isSubmitted">
        <div class="alert alert-info" role="alert">
          Short Url: 
          <a v-bind="{ href: shortUrl, target: '_blank' }">{{ shortUrl }}</a>
          <button class="bg-blue-900 text-white rounded p-1 mt-2 col-start-3 col-end-7 ml-3" @click="copyShortUrlToClipboard">Copy Link</button>
        </div> 
        </div>
      </div>
       
    </div>
</template>

