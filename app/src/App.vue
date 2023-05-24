<script lang="ts"> 
// import { ref } from 'vue';
import Toast from './components/Toast.vue'

document.title = "URL Shortener"

 // Toast interface
 interface Toast {
    title: string;
    content: string;
  }

export default {
  data() {
    return {
      longUrl: '',
      shortUrl: '',
      // Keeps track wether the URL submit button is clicked or not
      isSubmitted: false,
      isCopied: false,
      toasts: <Toast[]>[]
    }
  },
  methods: {
    onSubmit() {
      // Sends the url to backend for modifications and to store in DB
      this.isSubmitted = true

      fetch('http://localhost:3333/api/short', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "origUrl": this.longUrl
      })
      })
      .then(response => response.json())
      .then(data => this.shortUrl = data.shortUrl)
      .catch(error => console.error(error));
    },
    copyShortUrlToClipboard() {
      // Copies the shortened URL to clipboard
      const el = document.createElement('textarea')
      el.value = this.shortUrl
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      
      // If link is copied then create toast
      this.createToast()
      this.isCopied = true
      },
      createToast() {
        this.toasts.push({
        title: 'Success',
        content: 'Url copied to clipboard!'
      });
      // Deletes toast after 5 seconds
      setTimeout(() => {
        this.clearAllToasts();
        this.isCopied = false
      }, 5000);
    },
    clearAllToasts() {
      this.toasts = []
      this.isCopied = false
    }
  }
}

// // Toasts array
// const toasts = ref<Toast[]>([]);

// const createToast = () => {
//   toasts.value.push({
//     title: 'Success',
//     content: 'Url copied to clipboard!'
//   });
//   // Deletes toast after 5 seconds
//   setTimeout(function(){
//     clearAllToasts();
//     isCopied.value = false
//   }, 5000);
// }

// // Deletes all toasts from array
// const clearAllToasts = () => {
//   toasts.value = []
//   isCopied.value = false
// }

</script>


<template>
     <div class="flex justify-center items-center flex-col w-full h-screen" style="background-image: url('/src/assets/layered-steps-haikei (1).svg'); background-repeat: no-repeat; background-size: cover;">
      <h1 class="text-white mb-8 -mt-8">Long URL Shortener</h1> 
      <div class="flex justify-start items-center flex-col  w-2/4 h-3/4 max-h-full overflow-auto">

      <!-- Form --> 
      <form class="row g-3 mt-1" @submit.prevent="onSubmit">
        <div class="col-auto">
          <input type="text" class="form-control" id="inputPassword2" placeholder="Long URL" v-model="longUrl" @click="longUrl = ''" required>
        </div>
        <div class="col-auto">
          <button type="submit" class="bg-indigo-600 text-white rounded p-2 mb-3 hover:bg-indigo-700 focus:ring" @click="clearAllToasts()">
            Shorten!
          </button>
        </div>
      </form>

       <!-- Box, where the shortened URl result appears --> 
      <div class="flex justify-center items-center" v-if="isSubmitted">
        <div class="alert alert-primary grid grid-cols-3 grid-rows-3 overflow-hidden md:flex justify-center items-center" role="alert">
          <span class="col-start-2 col-end-4 row-start-1">Short Url: </span>
          <a class="col-start-1 col-end-4 row-start-2" v-bind="{ href: shortUrl, target: '_blank' }">{{ shortUrl }}</a>
          <button class="col-start-1 col-end-4 row-start-3 bg-blue-900 text-white rounded p-1 mt-2 ml-3 focus:ring" id="liveToastBtn" @click="copyShortUrlToClipboard">
            Copy Link
          </button>
        </div> 
      </div>
    </div>

     <!-- Toast --> 
     <Toast 
     v-if="isCopied"
     v-for="(toast) in toasts"
     :title="toast.title"
     :content="toast.content"
     @clearToasts="clearAllToasts"
     />
     <!-- <CToaster class="flex justify-between fixed bottom-6 right-5 gap-4" placement="bottom-end" v-if="isCopied">
    <CToast class="flex flex-col border-2 p-2 rounded" v-for="(toast) in toasts">
      <div class="flex justify-between">  
      <CToastHeader>
      <span class="me-auto fw-bold text-white">{{toast.title}}</span>
      </CToastHeader>
      <button type="button" class="btn btn-close bg-white" aria-label="Close" @click="clearAllToasts()"></button>
    </div>
      <CToastBody class="me-auto text-white">
        {{ toast.content }}
      </CToastBody>  
    </CToast>
  </CToaster> -->
    
  </div>
</template>

