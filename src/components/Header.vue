<template>
  <header class="w-full bg-purple-100 shadow-sm border-b border-purple-200">
    <div class="max-w-screen-lg mx-auto flex flex-col sm:flex-row items-center justify-between p-4 gap-2">
      <h1 class="text-2xl font-extrabold text-purple-700 tracking-wider">
        💖 KATE & RALPH
      </h1>
      <nav class="flex gap-4 text-sm sm:text-base text-purple-600 font-medium">
        <router-link to="/" class="hover:underline hover:text-purple-800 transition"
          active-class="underline text-purple-800">
          Home
        </router-link>
        <router-link to="/about" class="hover:underline hover:text-purple-800 transition"
          active-class="underline text-purple-800">
          About
        </router-link>
      </nav>
    </div>
  </header>
</template>
