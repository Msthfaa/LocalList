<template>
<div>
<LayoutFirst>
  <div class="min-h-screen bg-gray-50 p-10">
    <!-- About LocaList -->
    <section class="text-center mb-16">
      <h2 class="text-4xl font-bold text-black">Tentang LocaList</h2>
      <p class="mt-4 text-gray-700 max-w-2xl mx-auto">
        LocaList adalah aplikasi yang membantu mahasiswa dan pekerja menemukan tempat terbaik untuk belajar, 
        berdiskusi, atau sekadar bersantai. Dengan berbagai pilihan cafe, perpustakaan, dan ruang kerja bersama, 
        LocaList mempermudah pencarian tempat sesuai dengan preferensi dan kebutuhan Anda.
      </p>
    </section>

    <!-- Team Section -->
    <section>
      <h3 class="text-3xl font-bold text-black text-center mb-10">Tim Pengembang</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
        <div v-for="member in team" :key="member.name" class="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <Avatar class="w-24 h-24 rounded-full">
            <AvatarImage :src="member.image" alt="Foto {{ member.name }}" />
            <AvatarFallback>{{ member.initials }}</AvatarFallback>
          </Avatar>
          <h4 class="text-xl font-semibold text-black mt-4">{{ member.name }}</h4>
          <p class="text-gray-600">{{ member.role }}</p>
        </div>
      </div>
    </section>
  </div>
</LayoutFirst>
</div>
</template>

<script>
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import LayoutFirst from "@/layout/layout-first.vue";

export default {
  components: { Avatar, AvatarImage, AvatarFallback },
  data() {
    return {
      team: [
        { name: "Rizky Ananda", role: "Frontend Developer", image: "RIDWAN.jpg", initials: "RA" },
        { name: "Dewi Lestari", role: "Backend Developer", image: "TYO.jpg", initials: "DL" },
        { name: "Budi Santoso", role: "UI/UX Designer", image: "https://source.unsplash.com/100x100/?designer", initials: "BS" }
      ]
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
body {
  font-family: 'Poppins', sans-serif;
}
</style>
