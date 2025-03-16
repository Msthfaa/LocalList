<script setup>
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import MapService from "@/lib/MapService";
import { onMounted, ref } from "vue";
import dummyData from "@/lib/dataDummy";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

let mapInstance = new MapService();

const places = dummyData;
onMounted(() => {
  mapInstance.createMap("maps");
  places.forEach((place) => {
    mapInstance.createMarker(place.location.lat, place.location.lng);
  });
});

// Asli
const setCenterMap = (lat, lng) => {
  mapInstance.setCenter(lat, lng);
};

const lat = ref(),
  lng = ref();

const setCenter = () => {
  mapInstance.setCenter(lat.value, lng.value);
};
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
                  @click="setCenterMap(place.location.lat, place.location.lng)"
                >
                  <img :src="place.image" alt="" class="w-1/2" />
                  <div class="ps-5">
                    <div class="mb-3">
                      <p class="leading-7">
                        {{ place.name }}
                      </p>

                      <Badge
                        variant="secondary"
                        class="me-1"
                        v-for="ctg in place.category"
                        >{{ ctg }}</Badge
                      >

                      <p class="text-xs mt-3 text-muted-foreground">
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
              <CardContent>
                <Input
                  type="text"
                  placeholder="lat"
                  v-model="lat"
                  class="my-3"
                />
                <Input
                  type="text"
                  placeholder="long"
                  v-model="lng"
                  class="my-3"
                />
                <Button @click="setCenter">Set</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  </div>
  <div class="w-full h-[100vh] bg-black" id="maps"></div>
</template>
