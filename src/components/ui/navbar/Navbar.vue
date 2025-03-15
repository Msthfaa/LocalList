<script setup lang="ts">

</script>

<template>
 <!-- Navbar -->
    <nav class="flex justify-between items-center p-6 bg-white shadow-lg">
      <h1 class="text-2xl font-bold text-black">📍 LocaList</h1>
      <ul class="flex space-x-6">
        <li v-for="link in ['Home', 'Explore', 'Favorites', 'Profile']" :key="link" class="hover:text-gray-500 cursor-pointer transition duration-300">{{ link }}</li>
      </ul>
      <button class="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300">Login</button>
    </nav>
</template>