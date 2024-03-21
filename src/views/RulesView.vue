<script setup lang="ts">

</script>

<template>
  <main>
    <div class="card bg-dark text-white">
      <img
        class="card-img"
        src="../assets/img/torimbia.jpg"
        alt="Panorámica de Torimbia"
      />
      <div class="card-img-overlay">
        <p class="card-text">
          Paraiso Natural
        </p>
      </div>
    </div>

    <div class="ContainerBodyTest">
      <p class="bodyText">
        Imagina un viaje por Asturias, una región que parece haber sido diseñada para el placer de los viajeros. Con sus paisajes impresionantes, desde las majestuosas montañas de los Picos de Europa hasta las playas de ensueño, Asturias ofrece una riqueza de experiencias que te dejarán sin aliento. Pero, ¿qué tal si pudieras descubrir estos maravillosos lugares y, al mismo tiempo, ganar puntos y premios?

Nuestro programa de recompensas por la exploración de Asturias es una invitación a descubrir la belleza de esta región, paso a paso. Cada visita a un lugar destacado te otorga puntos, que puedes canjear por premios increíbles. Imagina poder disfrutar de una entrada gratuita a un museo, un descuento en un restaurante local, o incluso una experiencia única como un paseo de senderismo guiado.

Asturias es un tesoro de maravillas naturales y culturales, desde sus impresionantes paisajes hasta sus ricos patrimonios históricos y gastronómicos. Con nuestro programa, puedes explorar estos tesoros a tu propio ritmo, acumulando puntos y premios en cada paso.

Además, este programa no solo te permite descubrir Asturias, sino que también te conecta con la comunidad local. Al compartir tus experiencias y fotos, contribuyes a enriquecer la plataforma con contenido de alta calidad, fomentando la interacción entre los usuarios y la comunidad de Asturias.

Así que, ¿estás listo para embarcarte en este viaje de descubrimiento por Asturias? Regístrate en nuestra plataforma, comienza a explorar, y descubre cómo los puntos y premios pueden hacer que tu viaje sea aún más especial. ¡Vamos, descubre Asturias y gana puntos y premios!
 
      </p>
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
  padding-right: 2%;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
}

.ContainerBodyTest {
  background-color: $yellowOp;
  
  border-radius: 40px;
  margin: 2% 3%;


  .bodyText {
  font-family: $first-font;
  color: $dark-blue;
  font-size: 1.5rem;
  padding: 3%;
  text-align: center;
}
}

</style>