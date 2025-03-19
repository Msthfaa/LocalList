<script setup lang="ts">
import { ref, onMounted } from "vue";
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import MapService from "@/lib/MapService";
import dummyData from "@/lib/dataDummy";
import { Badge } from "@/components/ui/badge";
import LayoutFirst from "@/layout/nav_only.vue";
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

// 🔹 Inisialisasi Map
let mapInstance = new MapService();
const places = dummyData;

onMounted(() => {
  mapInstance.createMap("maps");
  places.forEach((place) => {
    mapInstance.createMarker(place.location.lat, place.location.lng);
  });
});

// 🔹 Fungsi untuk set map ke tengah
const setCenterMap = (lat: number, lng: number) => {
  mapInstance.setCenter(lat, lng);
};

// 🔹 Form untuk set koordinat manual
const lat = ref();
const lng = ref();
const setCenter = () => {
  mapInstance.setCenter(lat.value, lng.value);
};

// 🔹 State Modal untuk HP
const showModal = ref(false);
const selectedPlace = ref<any>(null);

const openModal = (place: any) => {
  selectedPlace.value = place;
  showModal.value = true;
};
</script>

<template>
  <LayoutFirst>
    <div class="fixed z-50 w-full md:w-1/3 bg-white shadow-lg md:rounded-lg">
      <div class="px-5 py-3 w-full">
        <Tabs>
          <TabsList class="w-full flex">
            <TabsTrigger class="w-1/2" value="Search">Search</TabsTrigger>
            <TabsTrigger class="w-1/2" value="Recommendation">Recommendation</TabsTrigger>
          </TabsList>

          <TabsContent value="Search">
            <Card class="max-h-[540px] overflow-y-auto">
              <CardContent class="py-3">
                <Input type="text" placeholder="Cari..." class="my-3" />
                
                <!-- 🔹 Bungkus Tooltip dalam TooltipProvider -->
                <TooltipProvider>
                  <div v-for="place in places" :key="place.name">
                    <div
                      class="border-b py-3 cursor-pointer flex items-center"
                      @click="setCenterMap(place.location.lat, place.location.lng)"
                    >
                      <img :src="place.image" class="w-1/3 rounded-md" />
                      <div class="ps-3">
                        <p class="font-semibold">{{ place.name }}</p>
                        <div class="flex flex-wrap gap-1 mt-1">
                          <Badge variant="secondary" v-for="ctg in place.category" :key="ctg">
                            {{ ctg }}
                          </Badge>
                        </div>
                        <p class="text-xs mt-2 text-muted-foreground">⭐ {{ place.rating }}</p>
                        <Button class="mt-2 text-xs">Go</Button>
                      </div>

                      <!-- Tombol Info di HP -->
                      <div class="ms-auto md:hidden">
                        <Button variant="outline" class="p-2" @click="openModal(place)">
                          ℹ️
                        </Button>
                      </div>
                    </div>

                    <!-- Tooltip untuk Desktop -->
                    <Tooltip class="hidden md:block">
                      <TooltipTrigger>
                        <div class="cursor-pointer">ℹ️</div>
                      </TooltipTrigger>
                      <TooltipContent class="bg-white text-black p-4 rounded-md w-64">
                        <h3 class="font-bold">{{ place.name }}</h3>
                        <img :src="place.image" class="w-full rounded-md mt-3 mb-3" />
                        <!-- <p>{{ place.description }}</p> -->
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>

              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="Recommendation">
            <Card>
              <CardContent>
                <Input type="text" placeholder="Lat" v-model="lat" class="my-3" />
                <Input type="text" placeholder="Long" v-model="lng" class="my-3" />
                <Button @click="setCenter">Set</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>

    <!-- Bagian Maps -->
    <div class="w-full h-[100vh] bg-gray-300" id="maps"></div>

    <!-- Modal untuk HP -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-5 rounded-lg shadow-lg w-80">
        <h3 class="font-bold text-lg">{{ selectedPlace?.name }}</h3>
        <img :src="selectedPlace?.image" class="w-full rounded-md mt-3 mb-3" />
        <p>{{ selectedPlace?.description }}</p>
        <Button class="mt-3 w-full" @click="showModal = false">Close</Button>
      </div>
    </div>
  </LayoutFirst>
</template>

