<script setup lang="ts">
import {  RouterView } from 'vue-router';
import HeaderComponent from './components/elementals/HeaderComponent.vue';
import FooterComponent from './components/elementals/FooterComponent.vue';

</script>

<template>
  <header>
    
    <div class="wrapper">
      

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/reglas">Reglas</RouterLink>
        <RouterLink to="/concejos">Concejos</RouterLink>
        <RouterLink to="/retos">Retos</RouterLink>
        <RouterLink to="/registro">Registro</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav> -->
    </div>
    <HeaderComponent/> 
  </header>
  

  <RouterView />

<footer>
  <FooterComponent/>
</footer>
</template>

<style scoped lang="scss">

</style>
