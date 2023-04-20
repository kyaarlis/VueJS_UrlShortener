<script lang="ts">
</script>

<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="long-url">Long URL:</label>
      <input id="long-url" type="text" v-model="longUrl" required>
      <button type="submit">Shorten</button>
    </form>
    <p >Short URL:</p>
  </div>
</template>
