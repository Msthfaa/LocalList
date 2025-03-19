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

import places from "@/lib/dataDummy";

const changeRoute = (path: string) => {
  $router.push(path);
};
</script>

<template>
  <div>
    <LayoutFirst>
      <div class="my-3">
        <!-- Hero -->
        <div class="h-[80vh] w-full relative overflow-hidden">
          <div
            style="
              background-image: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
              background-size: cover;
              background-position: 100px;
              filter: brightness(50%);
            "
            class="h-[80vh] w-full justify-center items-center -z-50 absolute flex border-b px-4 text-center"
          ></div>
          <div class="h-[80vh] flex items-center justify-center">
            <div>
              <h1
              class="filter-none text-center text-white scroll-m-20 text-2xl md:text-4xl font-bold tracking-tight lg:text-5xl max-w-[90%] mx-auto mb-5"
            >
              Temukan Tempat Nyaman untuk Belajar & Nongkrong
            </h1>
            <div>
              <Button class="mx-auto block">Cari Tempat!</Button>
            </div>
            </div>
          </div>
        </div>
        <!-- Hero -->

        <!-- Carousel -->
        <div class="px-4 md:px-16 lg:px-32 py-5">
          <h3
            class="scroll-m-20 pb-2 text-2xl md:text-3xl font-semibold tracking-tight transition-colors first:mt-0"
          >
            Lagi Trending
          </h3>

          <Carousel>
            <CarouselContent>
              <CarouselItem
                @click="changeRoute('/maps')"
                v-for="place in places"
                class="sm:basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 cursor-pointer"
              >
                <Card>
                  <CardHeader class="min-h-52 max-h-52 overflow-hidden mb-3">
                    <img
                      :src="place.image"
                      class="w-full h-full object-cover"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle class="mb-3">{{ place.name }}</CardTitle>
                    <CardDescription>⭐ {{ place.rating }}</CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious class="invisible md:visible" />
            <CarouselNext class="invisible md:visible" />
          </Carousel>
        </div>
      </div>
    </LayoutFirst>
  </div>
</template>
