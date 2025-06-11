<script setup lang="ts">
import type { SnapsItem } from '@/data/snaps';
defineProps<{ item: SnapsItem }>()
</script>

<template>
	<router-link :to="`/snap-details/${item.id}`" class="block group">
		<div class="rounded-xl overflow-hidden shadow-md hover:shadow-pink-200 hover:shadow-lg transition">
			<img :src="item.image" alt="gallery image" class="w-full h-64 object-cover" />
			<div class="p-4 space-y-1 text-purple-800">
				<p class="line-clamp-1 text-sm">{{ item.title }}</p>
				<p class="text-xs text-purple-400">{{ item.date }} • {{ item.location }}</p>
			</div>
		</div>
	</router-link>
</template>