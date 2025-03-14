<script setup lang="ts">
import MapService from "@/lib/MapService";
import { onMounted } from "vue";

onMounted(() => {
  const coba = new MapService();
  coba.createMap("mapContainer");

  coba.createMarker(-7.2758471, 112.7911808);
});
</script>
<template>
  <h1>Coba Maps</h1>
  <div style="width: 640px; height: 480px" id="mapContainer"></div>

  <RouterLink to="/">Back</RouterLink>
</template>
