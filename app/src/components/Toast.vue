<template>
<CToaster class="flex justify-between fixed bottom-6 right-5 gap-4" placement="bottom-end" v-if="isCopied">
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
  </CToaster>
 </template>

 <script lang="ts">
 // Toast interface
  interface Toast {
    title: string;
    content: string;
  }

  export default {
    props: [],
     data() {
      return {
        toasts: <Toast[]>[]
      }
     },
     methods: {

     }
  }
</script>