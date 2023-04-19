<script lang="ts">
import { defineComponent } from 'vue';
import ShortenUrl from '../assets/api/ShortenUrl.vue';

export default defineComponent({
  data() {
    return {
      longUrl: '',
      shortUrl: ''
    };
  },
  methods: {
    async onSubmit() {
      this.shortUrl = await ShortenUrl(this.longUrl);
    }
  }
});
</script>

<template>
    <div>
      <form @submit.prevent="onSubmit">
        <label for="long-url">Long URL:</label>
        <input id="long-url" type="text" v-model="longUrl" required>
        <button type="submit">Shorten</button>
      </form>
      <p v-if="shortUrl">Short URL: <a :href="shortUrl">{{ shortUrl }}</a></p>
    </div>
  </template>
  
