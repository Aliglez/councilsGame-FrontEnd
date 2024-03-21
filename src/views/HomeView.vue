<script setup lang="ts"></script>

<template>
  <main>
    <div class="card bg-dark text-white">
      <img
        class="card-img"
        src="../assets/img/bannerUrriellu.jpg"
        alt="Panorámica de Urriellu"
      />
      <div class="card-img-overlay">
        <p class="card-text">
          Asturias, una región que parece haber sido diseñada para el placer.
        </p>
      </div>
    </div>
  </main>
</template>
<style scoped lang="scss">
@import "../assets/variables";

.card  {
  border: none;
}

.card-img-overlay {
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  
}

.card-text {
  font-family: $first-font;
  font-size: 3rem;
  text-align: right;
  color: white;
  width: 50%;
  display: right;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
}
</style>
