<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navbar -->
    <nav class="flex justify-between items-center p-6 bg-white shadow-lg">
      <!-- <h1 class="text-2xl font-bold text-black">📍 LocaList</h1> -->
      <img src="../assets/logo.jpg" class="w-100 h-12" alt="">
      <ul class="flex space-x-6">
        <li v-for="link in ['Home', 'Explore', 'Favorites', 'Profile']" :key="link" class="hover:text-gray-500 cursor-pointer font-semibold transition duration-300">{{ link }}</li>
      </ul>
    </nav>

    <!-- Hero Section -->
    <section class="relative text-center py-20 bg-gray-900 text-white">
      <h2 class="text-5xl font-bold drop-shadow-lg">Temukan Tempat Nyaman untuk Belajar & Nongkrong</h2>
      <button class="mt-6 px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-200 transition duration-300">Cari Sekarang</button>
    </section>

    <!-- Popular Places with Manual Pagination -->
    <section class="px-10 py-10 relative overflow-hidden">
      <h3 class="text-3xl font-bold mb-8 text-black">Tempat Populer</h3>
      <div class="overflow-hidden w-full">
        <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div v-for="place in places" :key="place.name" class="w-1/4 px-2 flex-shrink-0">
            <div class="bg-white shadow-lg rounded-3xl overflow-hidden transform transition duration-500 hover:scale-105 h-80">
              <img :src="place.image" class="w-full h-48 object-cover rounded-t-3xl" />
              <div class="p-4">
                <h4 class="text-xl font-bold text-black">{{ place.name }}</h4>
                <p class="text-gray-600">{{ place.category }}</p>
                <p class="mt-2 text-gray-700">⭐ {{ place.rating }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-5 right-5 flex space-x-4">
        <button @click="prevSlide" class="bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button @click="nextSlide" class="bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>

    <!-- About Section -->
    <section class="px-10 py-20 flex items-center bg-white">
      <div class="w-1/2">
        <img src="../assets/logo.jpg" class="rounded-3xl shadow-lg" />
      </div>
      <div class="w-1/2 pl-10">
        <h3 class="text-3xl font-bold text-black">Tentang LocaList</h3>
        <p class="mt-4 text-gray-700 leading-relaxed">
          LocaList adalah aplikasi yang membantu mahasiswa dan pekerja menemukan tempat terbaik untuk belajar, 
          berdiskusi, atau sekadar bersantai. Dengan berbagai pilihan cafe, perpustakaan, dan ruang kerja bersama, 
          LocaList mempermudah pencarian tempat sesuai dengan preferensi dan kebutuhan Anda.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      places: [
        { name: 'Cafe Kopi Santai', category: 'Cafe', rating: '4.8', image: 'stk.jpg' },
        { name: 'Perpustakaan Kota', category: 'Library', rating: '4.7', image: 'stk.jpg' },
        { name: 'Co-Working Space XYZ', category: 'Co-Working', rating: '4.9', image: 'stk.jpg' },
        { name: 'Cafe Modern', category: 'Cafe', rating: '4.6', image: 'stk.jpg' },
        { name: 'Library 24/7', category: 'Library', rating: '4.8', image: 'stk.jpg' },
        { name: 'Startup Hub', category: 'Co-Working', rating: '4.9', image: 'stk.jpg' }
      ]
    };
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < Math.ceil(this.places.length / 4) - 1) {
        this.currentIndex++;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
</style>