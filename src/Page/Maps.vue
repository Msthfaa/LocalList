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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ScrollArea } from "@/components/ui/scroll-area";
import StarsInput from "@/components/StarsInput.vue";

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
                <Input
                  type="text"
                  placeholder="Cari..."
                  class="my-3"
                  v-model="searchQuery"
                />
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
                        <div class="ps-5 w-full">
                          <div class="mb-3">
                            <div class="flex w-full">
                              <p class="leading-7 me-auto block">
                                {{ place.name }}
                              </p>

                              <Badge class="bg-green-500 hover:bg-green-500">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-geo-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"
                                  />
                                </svg>
                                500 M
                              </Badge>
                            </div>

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
                      <div class="flex py-3 items-center px-2">
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
                        <p class="text-lg font-bold me-auto">
                          {{ place.name }}
                        </p>
                        <Badge class="bg-green-500 hover:bg-green-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-geo-fill"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"
                            />
                          </svg>
                          500 M
                        </Badge>
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
                            <TableCell class="font-medium"> Tutup </TableCell>
                            <TableCell class="flex">
                              <p class="me-auto">10:00 - 20:00</p>
                              <Badge class="bg-red-500 hover:bg-red-500">
                                Closed
                              </Badge></TableCell
                            >
                          </TableRow>
                          <TableRow>
                            <TableCell class="font-medium"> Harga </TableCell>
                            <TableCell>Rp.1.000 - Rp.10.000</TableCell>
                          </TableRow>
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
                      <div class="flex justify-between items-center">
                        <p class="text-lg mt-3 mb-2 font-bold">Komentar</p>
                        <Dialog>
                          <DialogTrigger>
                            <Button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-pencil-square"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                />
                              </svg>
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Tambah Ulasan</DialogTitle>
                              <DialogDescription>
                                <div class="mb-5">
                                  <p
                                    class="text-sm font-medium leading-none mt-1"
                                  >
                                    Makanan
                                  </p>
                                  <StarsInput/>
                                </div>
                                <div class="mb-5">
                                  <p
                                    class="text-sm font-medium leading-none mt-1"
                                  >
                                    Minuman
                                  </p>
                                  <StarsInput/>
                                </div>
                                <div class="mb-5">
                                  <p
                                    class="text-sm font-medium leading-none mt-1"
                                  >
                                    Wifi
                                  </p>
                                  <StarsInput/>
                                </div>
                                <div class="mb-5">
                                  <p
                                    class="text-sm font-medium leading-none mt-1"
                                  >
                                    Kenyamanan
                                  </p>
                                  <StarsInput/>
                                </div>
                                <div>
                                  <p
                                    class="text-sm mb-3 font-medium leading-none mt-1"
                                  >
                                    Komentar
                                  </p>
                                  <Input type="text" />
                                </div>
                              </DialogDescription>
                            </DialogHeader>

                            <DialogFooter>
                              <Button>Kirim</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
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
