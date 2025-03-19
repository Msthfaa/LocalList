<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import MapService from "@/lib/MapService";
import { onMounted, ref, computed } from "vue";
import dummyData from "@/lib/dataDummy";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/layout/nav_only.vue";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Card, CardContent } from "@/components/ui/card";
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

// Asli
const setCenterMap = (lat: number, lng: number) => {
  mapInstance.setCenter(lat, lng);
};

const lat = ref(),
  lng = ref();

const valueSearch = ref("Search");

function clickSearch() {
  valueSearch.value = valueSearch.value === "Search" ? "" : "Search";
}

const activeTooltip = ref(0);
const setTooltip = (id: number) => {
  if (activeTooltip.value === id) {
    activeTooltip.value = 0;
  } else {
    activeTooltip.value = id;
  }
};

const setCenter = () => {
  mapInstance.setCenter(lat.value, lng.value);
};

const searchQuery = ref("");

const filteredPlaces = computed(() =>
  dummyData.filter((place) =>
    place.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

</script>

<template>
  <Navbar class="z-50"></Navbar>
  <div class="w-full lg:w-1/3 fixed z-50">
    <div class="flex">
      <div class="px-5 py-3 w-full my-5 z-50">
        <Tabs>
          <TabsList class="w-full">
            <TabsTrigger
              class="w-full"
              @click="clickSearch"
              :value="valueSearch"
            >
              Search
            </TabsTrigger>
            <TabsTrigger class="w-full" value="Recomendation">
              Recommendation
            </TabsTrigger>
          </TabsList>

          <TabsContent value="Search">
            <Card class="max-h-[540px] overflow-y-auto">
              <CardContent class="py-3 relative">
                <Input type="text" placeholder="Cari..." class="my-3" v-model="searchQuery"/>
                <TooltipProvider v-for="place in filteredPlaces">
                  <Tooltip :open="activeTooltip == place?.id">
                    <TooltipTrigger
                      @click="setTooltip(place?.id)"
                      class="block text-start w-full"
                    >
                      <div
                        class="border-b py-3 cursor-pointer flex"
                        @click="
                          setCenterMap(place.location.lat, place.location.lng)
                        "
                      >
                        <img :src="place.image" class="w-1/2" />
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
                            <Button class="mt-3">Go</Button>
                          </div>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      class="bg-white translate-x-[-94%] md:translate-x-20 text-black overflow-y-scroll max-h-[100vh]"
                    >
                      <div class="flex py-3 items-center  px-2">
                        <Button @click="setTooltip(0)" class="me-3 text-2xl">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-arrow-left-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                            />
                          </svg>
                        </Button>
                        <p class="text-lg font-bold">{{ place.name }}</p>
                      </div>
                      <div class="flex justify-center">
                        <img
                          :src="place.image"
                          alt=""
                          class="w-60 rounded-md mt-5 mb-5"
                        />
                      </div>
                      <Badge
                        variant="secondary"
                        class="me-1"
                        v-for="ctg in place.category"
                        >{{ ctg }}</Badge
                      >
                      <p class="leading-7 [&:not(:first-child)]:mt-2">
                        The king, seeing how much happier his subjects were,<br />
                        realized the error of his ways and repealed the joke
                        tax.
                      </p>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead class="w-[100px]">
                              Keterangan
                            </TableHead>
                            <TableHead>Rating</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell class="font-medium"> Makanan </TableCell>
                            <TableCell>⭐⭐⭐⭐⭐</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell class="font-medium"> Minuman </TableCell>
                            <TableCell>⭐⭐⭐</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell class="font-medium"> Wifi </TableCell>
                            <TableCell>⭐⭐</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell class="font-medium">
                              Kenyamanan
                            </TableCell>
                            <TableCell>⭐⭐⭐⭐</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                      <div class="text-lg mt-3 font-bold">Komentar</div>
                      <ScrollArea
                        class="h-[200px] w-[350px] rounded-md border p-4"
                      >
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead class="w-[100px]">
                                Username
                              </TableHead>
                              <TableHead>Komen</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell class="font-medium"> Anton </TableCell>
                              <TableCell
                                >Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell class="font-medium"> Siti </TableCell>
                              <TableCell
                                >Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell class="font-medium">
                                Ridwan
                              </TableCell>
                              <TableCell
                                >Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's
                              </TableCell>
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
  <div class="w-full h-[92.5vh] bg-black" id="maps"></div>
</template>
