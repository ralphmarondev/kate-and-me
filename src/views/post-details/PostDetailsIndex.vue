<script setup lang="ts">
import { galleryItems } from '@/data/posts'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id as string
const memory = galleryItems.find((m) => m.id === id)
</script>

<template>
	<section class="mt-3 w-[92%] mx-auto">
		<div class="min-h-screen flex flex-col">
			<div v-if="memory" class="w-full">
				<div class="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
					<img :src="memory.image" alt="memory"
						class="w-full md:w-[400px] h-[300px] md:h-[500px] object-cover rounded-xl shadow mx-auto md:mx-0" />
					<div class="flex-1 mt-4 md:mt-0">
						<h3 class="text-pink-500 text-2xl md:text-3xl mb-3">{{ memory.title }}</h3>
						<p class="text-pink-400 text-lg md:text-2xl mb-3">{{ memory.description }}</p>
						<p class="text-sm md:text-lg text-purple-300">{{ memory.date }} • {{ memory.location }}</p>
					</div>
				</div>
			</div>
			<div v-else class="text-center text-pink-500 py-10">Memory not found 😢</div>
			<RouterLink to="/" class="text-purple-500 hover:text-pink-500 underline text-base md:text-lg my-6 text-center">
				← Back to Home
			</RouterLink>
		</div>
	</section>
</template>