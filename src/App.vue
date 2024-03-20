<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    
    <div class="wrapper">
      

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/reglas">Reglas</RouterLink>
        <RouterLink to="/concejos">Concejos</RouterLink>
        <RouterLink to="/retos">Retos</RouterLink>
        <RouterLink to="/registro">Registro</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">

</style>
