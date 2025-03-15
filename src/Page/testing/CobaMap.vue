<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import MapService from "@/lib/MapService";
import { onMounted,ref } from "vue";

let map;


onMounted(() => {
  map = new MapService();
  map.createMap("mapContainer");

  map.createMarker(-7.2758471, 112.7911808);
});

const handleEvent = () => {
    map.setCenter(-7.2758471,112.7911808)
}

</script>
<template>
  <Button @click="handleEvent">Tekan</Button>
  <div style="width: 640px; height: 480px" id="mapContainer"></div>
  <RouterLink to="/">Back</RouterLink>
</template>
