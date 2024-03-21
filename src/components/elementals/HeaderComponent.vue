<script setup lang="ts"></script>
<template>
  <header>
    <div>
      <a class="navbar-brand" href="/">
        <img
          src="/src/assets/img/logoTransparente.png"
          width="100"
          height="100"
          class="logo"
          alt="Logo"/></a>
    </div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" id="burguer"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link moove" aria-current="page" href="/"
                ><p>Inicio</p></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link moove" aria-current="page" href="/reglas"
                ><p>Reglas</p></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link moove" aria-current="page" href="/concejos"
                ><p>Concejos</p></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link moove" aria-current="page" href="/retos"
                ><p>Retos</p></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link moove" href="/registro">Registro</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-person-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped lang="scss">
@import "../../assets/variables";
header {
  background-color: white;
  // padding: 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .nav-item {
    font-family: $first-font;
    font-size: 1.8rem;
    padding-right: 1.5rem;
  }

  .navbar-nav {
    color: $green;
    --bs-navbar-color: $green;
    --bs-navbar-hover-color: $Yellow;
    --bs-nav-link-hover-color: $yellow;
  }
  .nav-link {
    color: $green;
    display: flex;
    flex-direction: row;
  }

  .navbar-toggler {
    color: $green;
    .navbar-toggler-icon {
      color: $green;
    }
  }
}
</style>