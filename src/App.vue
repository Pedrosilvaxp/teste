<script setup>
import HomeView from "./components/HomeView.vue";
import { ref } from "vue";

const num = ref(0);
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <!-- NAVBAR -->
    <nav class=" fixed top-0 z-50 w-full px-4 py-3 text-center">
      <div class="container rounded-2xl bg-[#3A38CF]">
        <a class="flex items-center gap-2 text-decoration-none" href="#">
          <img
            src="https://cdn-icons-png.flaticon.com/512/188/188987.png"
            alt="Logo"
            width="30"
            height="30"
          />
          <span class="fw-bold text-dark text-white">PokeVite</span>
        </a>
      </div>
    </nav>

    <!-- MAIN CONTENT -->
    <main class="main pt-20 flex-1">
      <HomeView />
    </main>

    <!-- FOOTER -->
    <footer class="bg-primary text-light text-center py-3 border-t-0"
      style="background: linear-gradient(90deg, rgba(72, 63, 251, 0.8071) 0%, rgba(70, 252, 244, 0.510241596368555) 100%); position:fixed; bottom:0; left:0; width:100vw; height:56px; display:flex; align-items:center; justify-content:center; background-color: #3fa0fb;"
    >
      © {{ new Date().getFullYear() }} PokeVite
    </footer>
  </div>
</template>

<style>
@reference "tailwindcss";
</style>
