<script setup lang="ts"></script>

<template>
  <div class="TrialsContainer">
  <div class="cardBox" style="width: 18rem">
    <img class="card-img-top" src="../../assets/img/playas.png" alt="Playas" />
    <div class="card-body">
      <p class="card-text">
        200
        <img
          class="moneda"
          src="../../assets/img/trisquelAzulTransparente.png"
          alt="Símbolo de trisquel"
        />
      </p>
    </div>
  </div>
  <div class="cardBox" style="width: 18rem">
    <img class="card-img-top" src="../../assets/img/rutas.png" alt="Rutas" />
    <div class="card-body">
      <p class="card-text">
        300
        <img
          class="moneda"
          src="../../assets/img/trisquelAzulTransparente.png"
          alt="Símbolo de trisquel"
        />
      </p>
    </div>
  </div>
  <div class="cardBox" style="width: 18rem">
    <img class="card-img-top" src="../../assets/img/restaurantes.png" alt="Restaurantes" />
    <div class="card-body">
      <p class="card-text">
        400
        <img
          class="moneda"
          src="../../assets/img/trisquelAzulTransparente.png"
          alt="Símbolo de trisquel"
        />
      </p>
    </div>
  </div>
  <div class="cardBox" style="width: 18rem">
    <img class="card-img-top" src="../../assets/img/mercados.png" alt="Rutas" />
    <div class="card-body">
      <p class="card-text">
        500
        <img
          class="moneda"
          src="../../assets/img/trisquelAzulTransparente.png"
          alt="Símbolo de trisquel"
        />
      </p>
    </div>
  </div>
</div>
</template>

<style lang="scss">
@import "../../assets/variables";

.TrialsContainer {
  display: flex;
  justify-content: space-between;
  margin: 2%;
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
}
.cardBox {

  text-align: center;
  border-radius: 10%;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 2%;
  
  .card-img-top {
    border-radius: 10% 10% 0 0;
  }

  .card-text {
    font-family: $first-font;
    font-size: 3rem;
    color: $dark-blue;
    @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
  }

  .moneda {
    width: 3rem;
    @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
  }

  .card-body {
    background-color: $yellowReto;
    border-radius: 0 0 25px 25px;
  }
}
</style>
