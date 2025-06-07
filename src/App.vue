<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from './components/Footer.vue';
</script>

<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>