<script setup lang="ts">

import SnapCard from '@/components/SnapCard.vue';
import { snapsItem } from '@/data/snaps';

const reversedSnapItems = [...snapsItem].reverse()
</script>

<template>
	<section class="mt-3 w-[92%] mx-auto">
		<div class="min-h-screen flex flex-col">
			<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				<SnapCard v-for="(item, index) in reversedSnapItems" :key="index" :item="item" />
			</div>
		</div>
	</section>
</template>