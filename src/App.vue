<script setup>
import HomeView from './components/HomeView.vue';
import { ref } from 'vue'

const num = ref(0)
</script>

<template>
  <div class="layout">
    <!-- NAVBAR -->
    <nav class="navbar bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center gap-2" href="#">
          <img
            src="https://cdn-icons-png.flaticon.com/512/188/188987.png"
            alt="Logo"
            width="30"
            height="30"
          />
          PokeVite
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <router-link class="nav-link" to="/">
                  Home
                </router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/about">
                  About
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <!-- MAIN CONTENT -->
    <main class="main">
      <HomeView />
    </main>

    <!-- FOOTER -->
    <footer class="bg-primary text-light text-center py-3">
      © {{ new Date().getFullYear() }} PokeVite
    </footer>
  </div>
</template>

<style>
/* LAYOUT BASE */
.layout {
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
}

/* CONTEÚDO PRINCIPAL */
.main {
  flex: 1;
  padding-top: 70px; /* altura da navbar fixed */
}

/* FOOTER */
footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
  }
</style>