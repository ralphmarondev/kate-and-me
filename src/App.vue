<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="font-mono bg-pink-50 h-full">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>