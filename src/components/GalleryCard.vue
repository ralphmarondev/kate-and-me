<script setup lang="ts">
import type { GalleryItem } from '@/data/posts';
defineProps<{ item: GalleryItem }>()
</script>

<template>
  <router-link :to="`/details/${item.id}`" class="block group">
    <div class="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
      <img :src="item.image" alt="gallery image" class="w-full h-64 object-cover" />
      <div class="p-4 space-y-1 text-purple-800">
        <p class="line-clamp-1 text-sm">{{ item.description }}</p>
        <p class="text-xs text-purple-400">{{ item.date }} • {{ item.location }}</p>
      </div>
    </div>
  </router-link>
</template>
