<script setup lang="ts">
import LayoutFirst from "@/layout/layout-first.vue";
import Input from "@/components/ui/input/Input.vue";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Button from "@/components/ui/button/Button.vue";
</script>

<template>
  <LayoutFirst>
    <div class="bg-gray-50 p-10 mb-32">
      <div class="md:flex">
        <div class="md:w-1/2 mb-10 me-auto">
          <h1
            class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
          >
            Tempat Lo, Tongkrongan Kita!
          </h1>
          <p class="leading-7 [&:not(:first-child)]:mt-6">
            Website kami hadir sebagai solusi bagi mahasiswa yang seringkali
            kebingungan mencari tempat ideal untuk mengerjakan tugas dan
            bersantai. Dengan mendaftarkan tempat Anda di platform kami, Anda
            akan mendapatkan kesempatan emas untuk menjangkau target pasar yang
            spesifik dan potensial ini. Kami menyediakan platform yang mudah
            digunakan dan efektif untuk mempromosikan fasilitas, suasana, dan
            menu tempat Anda kepada ribuan mahasiswa yang aktif mencari tempat
            yang nyaman dan sesuai dengan kebutuhan mereka. Jadilah bagian dari
            jaringan kami, tingkatkan visibilitas tempat Anda, dan tarik lebih
            banyak pelanggan dengan menjadi mitra kami sekarang.
          </p>
        </div>
        <div class="md:w-1/3 me-auto">
          <Card>
            <CardHeader>
              <CardTitle>
                <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Kontak Kami
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Input class="mb-3" type="text" placeholder="Nama Tempat Anda" />
              <Input
                class="mb-3"
                type="text"
                placeholder="Nomor Telepon Anda"
              />
              <Button class="mb-3">Kirim</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </LayoutFirst>
</template>
