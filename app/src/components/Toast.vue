<template>
<CToaster class="flex justify-between border-2 p-1 rounded fixed bottom-6 right-5" placement="bottom-end" v-if="isCopied">
    <CToast class="flex flex-col" v-for="(toast, index) in toasts">
      <div class="flex justify-between">
      <CToastHeader>
      <span class="me-auto fw-bold text-white inline">{{toast.title}}</span>
      </CToastHeader>
      <button type="button" class="btn btn-close bg-white" aria-label="Close" @click="removeToast(index)"></button>
    </div>
      <CToastBody class="me-auto text-white block">
        {{ toast.content }}
      </CToastBody>  
    </CToast>
  </CToaster>
 </template>

 <script lang="ts">
 // Toast interface
  interface Toast {
    title: string;
    content: string;
  }

  export default {
     data() {
      return {
        
      }
     }
  }
</script>