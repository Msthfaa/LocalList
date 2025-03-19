<script setup lang="ts">
import { ref } from 'vue';

const starsActive = ref(0);
const setStar = (i: number) => {
  starsActive.value = i;
};
</script>

<template>
  <div
    class="scroll-m-20 text-2xl font-semibold tracking-tight flex mt-3 justify-between mx-8"
  >
    <div
      v-for="i in 5"
      @click="setStar(i)"
      :class="`${i <= starsActive ? 'text-yellow-500' : 'text-gray-500'} cursor-pointer `"
    >
      <div class="fa-solid fa-star"></div>
    </div>
  </div>
</template>
