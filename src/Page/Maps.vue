<script setup>
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import MapService from "@/lib/MapService";
import { onMounted } from "vue";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

onMounted(() => {
  const mapInstance = new MapService();
  mapInstance.createMap("maps");
});
</script>

<template>
  <div class="w-1/3 fixed z-50">
    <div class="flex">
      <div class="px-5 py-3 w-full rounded my-5 z-50">
        <Tabs>
          <TabsList class="w-full">
            <TabsTrigger class="w-full" value="Search"> Search </TabsTrigger>
            <TabsTrigger class="w-full" value="Recomendation">
              Recommendation
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Search">
            <Card class="max-h-[540px] overflow-y-auto">
              <CardContent class="py-3 relative">
                <Input type="text" placeholder="Cari..." class="my-3" />
                <div
                  v-for="place in places"
                  class="border-b py-3 cursor-pointer flex"
                >
                  <img :src="place.image" alt="" class="w-1/2" />
                  <div class="ps-5">
                    <div class="mb-3">
                      <p class="leading-7">
                        {{ place.name }}
                      </p>
                      <small class="text-sm font-medium leading-none">
                        {{ place.category }}
                      </small>
                      <p class="text-sm text-muted-foreground">
                        ⭐ {{ place.rating }}
                      </p>
                    </div>
                    <Button>Rute</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Recomendation">
            <Card>
              <CardContent> </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  </div>
  <div class="w-full h-[100vh] bg-black" id="maps"></div>
</template>
