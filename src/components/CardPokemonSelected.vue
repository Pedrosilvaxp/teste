<script setup>
const pokemon = defineProps(["name", "xp", "height", "img", "loading"]);
</script>

<template>
  <div
    class="card CardPokemonSelected mx-auto w-full max-w-md rounded-lg p-8 text-white"
    :class="loading ? '' : 'animate_annimated animate__flipInY'"
    :style="{ background: 'linear-gradient(90deg, rgba(72, 63, 251, 0.8071) 0%, rgba(70, 252, 244, 0.510241596368555) 100%)' }"
  >
    <img
      v-if="pokemon.name"
      :src="pokemon.img"
      height="150"
      class="card-img-top mx-auto mt-2 block h-60 w-auto"
      :alt="pokemon.name"
    />
    <img
      v-else
      src="../assets/egg_pokemon.svg"
      height="150"
      class="card-img-top mx-auto mt-2 block h-60 w-auto egg-glow"
      alt="???"
    />

    <div class="card-body mt-4">
      <h5 class="card-title text-center text-xl font-bold">{{ pokemon.name || "???" }}</h5>
      <hr class="my-3 border-t border-white/30" />
      <div class="row flex">
        <section class="flex-1">
          <strong>XP:</strong>
          <span>{{ pokemon.xp || "???" }}</span>
        </section>
        <section class="flex-1">
          <strong>Altura:</strong>
          <span>{{ pokemon.height || "???" }}</span>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.egg-glow {
  filter: drop-shadow(0 0 8px rgba(70, 252, 244, 0.8))
          drop-shadow(0 0 20px rgba(70, 252, 244, 0.5))
          drop-shadow(0 0 40px rgba(70, 252, 244, 0.3));
  animation: pulse-glow 2s ease-in-out infinite alternate;
}

@keyframes pulse-glow {
  from {
    filter: drop-shadow(0 0 6px rgba(70, 252, 244, 0.6))
            drop-shadow(0 0 16px rgba(70, 252, 244, 0.35))
            drop-shadow(0 0 30px rgba(70, 252, 244, 0.2));
  }
  to {
    filter: drop-shadow(0 0 12px rgba(70, 252, 244, 1))
            drop-shadow(0 0 28px rgba(70, 252, 244, 0.7))
            drop-shadow(0 0 50px rgba(70, 252, 244, 0.4));
  }
}

@media (max-width: 768px) {
  .CardPokemonSelected {
    width: 40%;
    margin-bottom: 10px;
  }
  .CardPokemonSelected img {
    height: 120px;
  }
}
</style>
