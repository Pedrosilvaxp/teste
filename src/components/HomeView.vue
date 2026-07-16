<script setup>
import { onMounted, ref, computed } from 'vue';
import ListPokemons from './ListPokemons.vue';
import CardPokemonSelected from './CardPokemonSelected.vue';

const urlBaseSvg = ref("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/");
const pokemons = ref();
const searchPokemonField = ref("");
const pokemonSelected = ref();
const loading = ref(false);

onMounted(() => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").then(res => res.json()).then(res => pokemons.value = res.results);
});

const pokemonsFiltered = computed(() => {
  if (!pokemons.value) return [];

  // Quando pesquisar
  if (searchPokemonField.value.trim()) {
    return pokemons.value.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchPokemonField.value.toLowerCase())
    );
  }

  // Sem pesquisa: mostra apenas os 20 primeiros
  return pokemons.value.slice(0, 20);
});

const selectPokemon = async (pokemon) => {
  loading.value = true;

  await fetch(pokemon.url)
  .then(res => res.json())
  .then(res => pokemonSelected.value = res).catch(err => alert(err)).finally(() => loading.value = false);

  console.log(pokemonSelected.value);
}

const gradientMain = 'linear-gradient(90deg, rgba(72, 63, 251, 0.8071) 0%, rgba(70, 252, 244, 0.510241596368555) 100%)';
</script>

<template>
  <main>
    <div class="container mx-auto">
      <div class="flex flex-wrap gap-6">
        <div class="w-full md:w-2/5">
          <CardPokemonSelected
          :name="pokemonSelected?.name"
          :xp="pokemonSelected?.base_experience"
          :height="pokemonSelected?.height"
          :img="pokemonSelected?.sprites?.other?.dream_world?.front_default"
          :loading="loading"
          />
        </div>

        <!-- CONTENT -->
        <div class="flex-1 min-w-0">
          <div
            class="card card-list w-full rounded-lg border-0 p-4 text-white"
            :style="{ background: gradientMain }"
          >
            <div class="card-body">
              <div class="mb-4">
                <h3 class="text-start flex items-center gap-2 text-sm font-semibold">
                  <img src="../assets/logopoke.png" alt="" style="width: 24px;" />
                  Pokemons
                </h3>
                <input
                  v-model="searchPokemonField"
                  type="text"
                  class="form-control mt-3 w-full rounded border border-[#3fa0fb]/40 bg-[#071123] px-4 py-2 text-black placeholder-gray-400 outline-none transition-colors focus:border-[#46fcf4] focus:shadow-[0_0_10px_rgba(70,252,244,0.3)]"
                  placeholder="Pesquisar"
                />
              </div>
              <div class="grid grid-cols-3 gap-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                <ListPokemons
                v-for="pokemon in pokemonsFiltered"
                :key="pokemon.name"
                :name="pokemon.name"
                :urlBaseSvg="urlBaseSvg + pokemon.url.split('/')[6] + '.svg'"
                @click="selectPokemon(pokemon)"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<style scoped>
@reference "tailwindcss";
:root {
  --color-dark: #071123;
}
.card-list {
  max-height: 75vh;
  overflow-y: auto;
  overflow-x: hidden;
}

@media (max-width: 600px) {
  .card-list {
    max-height: 40vh;
  }
}
</style>
