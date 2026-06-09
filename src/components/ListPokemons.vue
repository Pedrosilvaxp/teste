<script setup>
const pokemon = defineProps(["name", "urlBaseSvg"]);
</script>

<template>
  <div class="w-full p-0.5 sm:col-span-1 md:col-span-1 lg:col-span-1">
    <div
      class="card cardListPokemon cursor-pointer rounded-lg p-2 text-center text-white transition-all duration-1000 hover:scale-105"
      :style="{ background: 'linear-gradient(90deg, rgba(72, 63, 251, 0.8071) 0%, rgba(70, 252, 244, 0.510241596368555) 100%)' }"
    >
      <p class="text-center text-xs font-medium">{{ pokemon.name }}</p>
      <img
        :src="urlBaseSvg"
        class="mx-auto mt-1 h-14 w-auto transition-all duration-1000 hover:p-[0.1rem]"
        alt="..."
        height="60"
      />
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";
</style>
