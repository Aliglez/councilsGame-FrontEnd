<script setup lang="ts"></script>

<template>
  <main>
    <div class="councilsContainer">
      <div class="council-text">
          <p class="card-text">
            Gijón ~ Oviedo ~ Avilés ~ Pola Siero ~ Llanes
          </p>
        </div>
      <div class="card text-white">
        <img
          class="card-img"
          src="../assets/img/mapaasturiascompleto.gif"
          alt="Mapa de Asturias"
        />
      </div>
        
      </div>
    
  </main>
</template>
<style scoped lang="scss">
@import "../assets/variables";

.councilsContainer {
  border: none;
  background-color: $yellow;
  display: flex;
}
.card-img {
  
  background-color: $yellow;
}

.card-text {
  font-family: $first-font;
  font-size: 2rem;
  text-align: right;
  color: $dark-blue;
  display: right;
  padding-right: 2%;
  

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
}

.hometext {
  font-family: $first-font;
  color: $dark-blue;
  font-size: 1.5rem;
  padding: 2%;
  text-align: center;
}
</style>
