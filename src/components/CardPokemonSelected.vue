<script setup>
const pokemon = defineProps(["name", "xp", "height", "img", "loading"])
</script>

<template>
          <div 
          class="card CardPokemonSelected"
          :class="loading ? '' : 'animate_annimated animate__flipInY'"
          >
            <img
              v-if="pokemon.name"
              :src="pokemon.img"
              height="150"
              class="card-img-top pt-2"
              :alt="pokemon.name"
            />
            <img
              v-else
              src="../assets/egg_pokemon.svg"
              height="150"
              class="card-img-top pt-2"
              alt="???"
            />

            <div class="card-body">
              <h5 class="card-title text-center">{{ pokemon.name || '???' }}</h5>
              <hr>
              <div class="row">
                <section class="col">
                    <strong>XP:</strong>
                    <span>{{ pokemon.xp || '???' }}</span>
                </section>
                <section class="col">
                    <strong>Altura:</strong>
                    <span>{{ pokemon.height || '???' }}</span>
                </section>
              </div>
            </div>
          </div>
</template>

<style scoped>
.CardPokemonSelected {
  /* height: 75vh; */
  background:  rgb(72,63,251);
  background: linear-gradient(
  90deg,
  rgba(72, 63, 251, 0.8071) 0%,
  rgba(70, 252, 244, 0.510241596368555) 100%
  );
}
</style>
