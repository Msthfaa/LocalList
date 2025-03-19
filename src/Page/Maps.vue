<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import MapService from "@/lib/MapService";
import { onMounted, ref } from "vue";
import dummyData from "@/lib/dataDummy";
import { Badge } from "@/components/ui/badge";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ScrollArea } from "@/components/ui/scroll-area";

let mapInstance = new MapService();

const places = dummyData;
onMounted(() => {
  mapInstance.createMap("maps");
  places.forEach((place) => {
    mapInstance.createMarker(place.location.lat, place.location.lng);
  });
});

// Pusatkan peta ke koordinat tertentu
const setCenterMap = (lat: number, lng: number) => {
  mapInstance.setCenter(lat, lng);
};

const lat = ref();
const lng = ref();

const setCenter = () => {
  mapInstance.setCenter(lat.value, lng.value);
};
</script>

<template>
  <div class="flex flex-col md:flex-row h-screen">
    <!-- Sidebar -->
    <div class="w-full md:w-1/3 bg-white shadow-lg md:fixed md:h-screen overflow-y-auto z-50 p-4">
      <Tabs>
        <TabsList class="w-full flex">
          <TabsTrigger class="w-1/2" value="Search">Search</TabsTrigger>
          <TabsTrigger class="w-1/2" value="Recommendation">Recommendation</TabsTrigger>
        </TabsList>

        <!-- Tab Search -->
        <TabsContent value="Search">
          <Card class="max-h-[540px] overflow-y-auto">
            <CardContent class="py-3 relative">
              <Input type="text" placeholder="Cari..." class="my-3" />
              <TooltipProvider v-for="place in places" :key="place.name">
                <Tooltip>
                  <TooltipTrigger class="block text-start w-full">
                    <div
                      class="border-b py-3 cursor-pointer flex flex-col md:flex-row items-center md:items-start"
                      @click="setCenterMap(place.location.lat, place.location.lng)"
                    >
                      <img :src="place.image" class="w-full md:w-1/2 rounded-lg" />
                      <div class="ps-5 mt-3 md:mt-0">
                        <p class="leading-7 font-semibold">{{ place.name }}</p>
                        <div class="mt-2">
                          <Badge v-for="ctg in place.category" :key="ctg" class="me-1">{{ ctg }}</Badge>
                        </div>
                        <p class="text-xs mt-3 text-gray-500">⭐ {{ place.rating }}</p>
                        <Button class="mt-3">Go</Button>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="right" class="bg-white text-black overflow-y-auto max-h-[80vh]">
                    <div class="text-lg mt-3 font-bold">{{ place.name }}</div>
                    <div class="flex justify-center">
                      <img :src="place.image" class="w-60 rounded-md mt-5 mb-5" />
                    </div>
                    <Badge v-for="ctg in place.category" :key="ctg" class="me-1">{{ ctg }}</Badge>
                    <p class="leading-7 mt-2">Deskripsi tempat ini...</p>

                    <!-- Tabel Keterangan -->
                    <Table class="mt-4">
                      <TableHeader>
                        <TableRow>
                          <TableHead>Keterangan</TableHead>
                          <TableHead>Rating</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell class="font-medium">Makanan</TableCell>
                          <TableCell>⭐⭐⭐⭐⭐</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell class="font-medium">Minuman</TableCell>
                          <TableCell>⭐⭐⭐</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell class="font-medium">Wi-Fi</TableCell>
                          <TableCell>⭐⭐</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell class="font-medium">Kenyamanan</TableCell>
                          <TableCell>⭐⭐⭐⭐</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>

                    <!-- Komentar -->
                    <div class="text-lg mt-3 font-bold">Komentar</div>
                    <ScrollArea class="h-[200px] w-full rounded-md border p-4">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Username</TableHead>
                            <TableHead>Komentar</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell class="font-medium">Anton</TableCell>
                            <TableCell>Lorem Ipsum...</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell class="font-medium">Siti</TableCell>
                            <TableCell>Lorem Ipsum...</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell class="font-medium">Ridwan</TableCell>
                            <TableCell>Lorem Ipsum...</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </ScrollArea>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardContent>
          </Card>
        </TabsContent>

        <!-- Tab Recommendation -->
        <TabsContent value="Recommendation">
          <Card>
            <CardContent>
              <Input type="text" placeholder="Lat" v-model="lat" class="my-3" />
              <Input type="text" placeholder="Lng" v-model="lng" class="my-3" />
              <Button @click="setCenter">Set</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>

    <!-- Map Area -->
    <div class="flex-1 h-screen bg-black" id="maps"></div>
  </div>
</template>
