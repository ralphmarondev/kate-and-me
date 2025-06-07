<script setup lang="ts">
import { galleryItems } from '@/data/posts'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id as string
const memory = galleryItems.find((m) => m.id === id)
</script>

<template>
	<div class="min-h-screen flex flex-col">
		<div v-if="memory" class="max-w-screen-md mx-auto p-6 space-y-4">
			<img :src="memory.image" alt="memory" class="w-full rounded-xl shadow" />
			<p class="text-lg text-purple-700">{{ memory.description }}</p>
			<p class="text-sm text-purple-400">{{ memory.date }} • {{ memory.location }}</p>
			<RouterLink to="/" class="text-purple-600 underline text-sm">← Back to gallery</RouterLink>
		</div>

		<div v-else class="text-center text-purple-400 py-10">Memory not found 😢</div>
	</div>
</template>
