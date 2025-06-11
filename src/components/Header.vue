<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const isNavOpen = ref(false)
const isDarkTheme = ref(false)

const toggleNav = () => {
	isNavOpen.value = !isNavOpen.value
}
const toggleTheme = () => {
	isDarkTheme.value = !isDarkTheme.value
}
</script>

<template>
	<nav class="flex justify-between items-center w-[92%] mx-auto py-5">
		<div>
			<h3 class="text-pink-500 hover:text-purple-500 text-2xl font-bold">Kate and Ralph</h3>
		</div>
		<div
			class="md:static absolute md:min-h-fit min-h-[60vh] left-0 transition-all duration-300 md:w-auto w-full flex items-center px-5"
			:class="isNavOpen ? 'top-[9%] bg-pink-50' : 'top-[-100%]'">
			<ul class="flex md:flex-row flex-col md:items-center md:gap-[3vw] gap-8">
				<li>
					<RouterLink class="hover:text-pink-500 text-purple-500 text-[20px]" to="/">Home</RouterLink>
				</li>
				<li>
					<RouterLink class="hover:text-pink-500 text-purple-500 text-[20px]" to="/snapshots">Snapshot</RouterLink>
				</li>
				<li>
					<RouterLink class="hover:text-pink-500 text-purple-500 text-[20px]" to="/the-start">The Start</RouterLink>
				</li>
			</ul>
		</div>
		<div class="flex items-center gap-6">
			<Icon :icon="isDarkTheme ? 'ion:sunny-outline' : 'ion:moon-outline'"
				class="text-3xl cursor-pointer text-pink-500 hover:text-purple-500" @click="toggleTheme" />
			<Icon :icon="isNavOpen ? 'ion:close' : 'ion:menu'"
				class="text-3xl cursor-pointer md:hidden text-pink-500 hover:text-purple-500" @click="toggleNav" />
		</div>
	</nav>
</template>