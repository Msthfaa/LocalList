<script setup lang="ts">
import { ref } from "vue";
import LayoutFirst from "@/layout/layout-first.vue";
import Input from "@/components/ui/input/Input.vue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Button from "@/components/ui/button/Button.vue";

const namaTempat = ref("");
const nomorTelepon = ref("");

const submitForm = () => {
  if (!namaTempat.value || !nomorTelepon.value) {
    alert("Harap isi semua bidang sebelum mengirim!");
    return;
  }
  console.log("Data Dikirim:", { namaTempat: namaTempat.value, nomorTelepon: nomorTelepon.value });
  alert("Form berhasil dikirim!");
  // Tambahkan logika untuk mengirim data ke backend di sini
};
</script>

<template>
  <LayoutFirst>
    <div class="bg-gray-50 p-10 mb-32">
      <div class="md:flex">
        <div class="md:w-1/2 mb-10 me-auto">
          <h1 class="border-b pb-2 text-3xl font-semibold tracking-tight">
            Tempat Lo, Tongkrongan Kita!
          </h1>
          <p class="leading-7 mt-6">
            Website kami hadir sebagai solusi bagi mahasiswa yang seringkali
            kebingungan mencari tempat ideal untuk mengerjakan tugas dan bersantai.
            Dengan mendaftarkan tempat Anda di platform kami, Anda akan mendapatkan
            kesempatan emas untuk menjangkau target pasar yang spesifik dan potensial ini.
            Jadilah bagian dari jaringan kami dan tarik lebih banyak pelanggan dengan
            menjadi mitra kami sekarang.
          </p>
        </div>
        <div class="md:w-1/3 me-auto">
          <Card>
            <CardHeader>
              <CardTitle>
                <h3 class="text-2xl font-semibold tracking-tight">Kontak Kami</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Input v-model="namaTempat" class="mb-3" type="text" placeholder="Nama Tempat Anda" />
              <Input v-model="nomorTelepon" class="mb-3" type="text" placeholder="Nomor Telepon Anda" />
              <Button class="mb-3 w-full" @click="submitForm">Kirim</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </LayoutFirst>
</template>
