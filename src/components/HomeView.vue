<script setup>
import { onMounted, ref, computed } from "vue";

import ListPokemons from "./ListPokemons.vue";
import CardPokemonSelected from "./CardPokemonSelected.vue";

const urlBaseSvg = ref(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
);

const pokemons = ref([]);
const pokemonSelected = ref(null);
const searchPokemonField = ref("");
const loading = ref(false);

onMounted(() => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
    .then((res) => res.json())
    .then((res) => {
      pokemons.value = res.results;
    });
});

const pokemonsFiltered = computed(() => {
  if (!pokemons.value.length) return [];

  if (searchPokemonField.value.trim()) {
    return pokemons.value.filter((pokemon) =>
      pokemon.name
        .toLowerCase()
        .includes(searchPokemonField.value.toLowerCase())
    );
  }

  return pokemons.value.slice(0, 30);
});

const selectPokemon = async (pokemon) => {
  loading.value = true;

  try {
    const response = await fetch(pokemon.url);
    pokemonSelected.value = await response.json();
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>

<main
class="min-h-screen bg-[#0C0D38] relative overflow-hidden"
>

<!-- Glow Background -->

<div
class="absolute -top-72 -left-52 h-[550px] w-[550px] rounded-full bg-violet-600/15 blur-[180px]"
></div>

<div
class="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]"
></div>

<div
class="relative z-10 mx-auto max-w-[1700px] px-6 py-10"
>

<div
class="
grid
gap-8

xl:grid-cols-[390px_1fr]
"
>

<!-- CARD -->

<CardPokemonSelected
:name="pokemonSelected?.name"
:xp="pokemonSelected?.base_experience"
:height="pokemonSelected?.height"
:img="pokemonSelected?.sprites?.other?.dream_world?.front_default"
:loading="loading"
/>

<!-- LISTA -->

<section

class="
rounded-[34px]

border
border-white/10

bg-white/5

backdrop-blur-2xl

shadow-[0_25px_70px_rgba(0,0,0,.35)]

overflow-hidden
"

>

<div class="p-9">

<!-- HEADER -->

<div

class="
mb-10

flex
flex-col
gap-7

xl:flex-row
xl:items-center
xl:justify-between
"

>

<div>

<h1
class="
text-5xl
font-bold
text-white
"
>
Pokédex
</h1>

<p
class="
mt-2
text-slate-400
"
>
Escolha um Pokémon para visualizar seus detalhes.
</p>

</div>

<!-- SEARCH -->

<div
class="relative w-full xl:w-[380px]"
>

<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="2"
stroke="currentColor"
class="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
>
<path
stroke-linecap="round"
stroke-linejoin="round"
d="m21 21-4.35-4.35M16.65 10.825a5.825 5.825 0 1 1-11.65 0 5.825 5.825 0 0 1 11.65 0Z"
/>
</svg>

<input

v-model="searchPokemonField"

type="text"

placeholder="Pesquisar Pokémon..."

class="
w-full

rounded-2xl

border
border-white/10

bg-[#181D4A]

py-4
pl-14
pr-5

text-white

outline-none

transition-all

placeholder:text-slate-500

focus:border-violet-500
focus:ring-4
focus:ring-violet-500/20
"
/>

</div>

</div>

<!-- GRID -->

<div

class="
card-list

grid

gap-6

[grid-template-columns:repeat(auto-fit,minmax(185px,1fr))]
"

>

<ListPokemons

v-for="pokemon in pokemonsFiltered"

:key="pokemon.name"

:name="pokemon.name"

:urlBaseSvg="urlBaseSvg + pokemon.url.split('/')[6] + '.svg'"

@click="selectPokemon(pokemon)"

/>

</div>

</div>

</section>

</div>

</div>

</main>

</template>

<style scoped>

.card-list{

max-height:75vh;

overflow-y:auto;

overflow-x:hidden;

padding-right:8px;

scrollbar-width:thin;

scrollbar-color:rgba(124,92,255,.45) transparent;

}

.card-list::-webkit-scrollbar{

width:8px;

}

.card-list::-webkit-scrollbar-track{

background:transparent;

}

.card-list::-webkit-scrollbar-thumb{

background:rgba(124,92,255,.35);

border-radius:999px;

}

.card-list::-webkit-scrollbar-thumb:hover{

background:rgba(124,92,255,.65);

}

@media(max-width:1280px){

.card-list{

max-height:none;

padding-right:0;

}

}

@media(max-width:1024px){

main{

padding-bottom:50px;

}

}

@media(max-width:768px){

h1{

font-size:2.3rem;

}

}

</style>