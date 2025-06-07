<template>
	<div class="min-h-screen flex flex-col">
		<div class="p-4">
			<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				<GalleryCard v-for="(item, index) in galleryItems" :key="index" :item="item" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import GalleryCard from '@/components/GalleryCard.vue';
import { galleryItems } from '@/data/posts';
</script>
