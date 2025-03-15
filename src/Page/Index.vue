<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import LayoutFirst from "@/layout/layout-first.vue";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRouter } from "vue-router";

const $router = useRouter();

const places = [
  {
    name: "Cafe Kopi Santai",
    category: "Cafe",
    rating: "4.8",
    image: "stk.jpg",
  },
  {
    name: "Perpustakaan Kota",
    category: "Library",
    rating: "4.7",
    image: "stk.jpg",
  },
  {
    name: "Co-Working Space XYZ",
    category: "Co-Working",
    rating: "4.9",
    image: "stk.jpg",
  },
  { name: "Cafe Modern", category: "Cafe", rating: "4.6", image: "stk.jpg" },
  {
    name: "Library 24/7",
    category: "Library",
    rating: "4.8",
    image: "stk.jpg",
  },
  {
    name: "Startup Hub",
    category: "Co-Working",
    rating: "4.9",
    image: "stk.jpg",
  },
];

const changeRoute = (path: string) => {
  $router.push(path);
};
</script>

<template>
  <div>
    <LayoutFirst>
      <div class="my-3">
        <!-- Hero -->
        <div class="py-40 border-b">
          <h1
            className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-center mb-5"
          >
            Temukan Tempat Nyaman untuk Belajar & Nongkrong
          </h1>
          <div>
            <Button class="mx-auto block">Cari Tempat!</Button>
          </div>
        </div>
        <!-- Hero -->

        <!-- Carrousel -->
        <div class="px-32 py-5">
          <h3
            class="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
          >
            Lagi Trending
          </h3>

          <Carousel>
            <CarouselContent>
              <CarouselItem
                @click="changeRoute('/maps')"
                v-for="place in places"
                class="basis-1/3 cursor-pointer"
              >
                <Card>
                  <CardHeader>
                    <img :src="place.image" alt="" />
                  </CardHeader>
                  <CardContent>
                    <CardTitle class="mb-3">{{ place.name }}</CardTitle>
                    <CardDescription>⭐ {{ place.rating }}</CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </LayoutFirst>
  </div>
</template>
