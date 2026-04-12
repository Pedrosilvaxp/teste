<script setup>
const pokemon = defineProps(["name", "urlBaseSvg"]);

</script>

<template>
  <div class="col-4">
    <div class="card cardListPokemon p-2 mb-3">
        <p class="text-center">{{ pokemon.name }}</p>
        <img :src="urlBaseSvg"
        class="card-img-top"
        alt="..."
        height="80"
        />
    </div>
  </div>
</template>

<style scoped>
.cardListPokemon {
  background:  rgb(72,63,251);
  background: linear-gradient(
  90deg,
  rgba(72, 63, 251, 0.8071) 0%,
  rgba(70, 252, 244, 0.510241596368555) 100%
  );
  cursor: pointer;
  transition-duration: 1s;
}
.cardListPokemon:hover {
  background: linear-gradient(
  90deg,
  rgba(72, 63, 251, 0.6) 0%,
  rgba(70, 252, 244, 0.4) 100%
  );
}
.cardListPokemon:hover img {
  padding: .1rem;
}
</style>