<script setup lang="ts">

import GalleryCard from '@/components/GalleryCard.vue';
import { galleryItems } from '@/data/posts';

const reversedGalleryItems = [...galleryItems].reverse()
</script>

<template>
	<section class="mt-3 w-[92%] mx-auto">
		<div class="min-h-screen flex flex-col">
			<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				<GalleryCard v-for="(item, index) in reversedGalleryItems" :key="index" :item="item" />
			</div>
		</div>
	</section>
</template>