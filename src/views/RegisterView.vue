<script setup lang="ts">
import RegisterForm from "@/components/forms/RegisterForm.vue";
</script>

<template>
  <main>
    <body class="img_beach">
      <div class="body_container">
        <div class="leftcontainer"></div>
        <div class="rigthcontainer">
          <h1>BIENVENID@S</h1>
          <RegisterForm />
        </div>
      </div>
    </body>
  </main>
</template>
<style scoped lang="scss">
@import "../assets/variables";

.img_beach {
  background-image: url("../assets/img/Aguilar_Mampiris.jpg");
  background-position: center center;
  background-size: cover;

  margin-top: 0.1%;
  margin-bottom: 0.1%;
}
.body_container {
  display: flex;
  justify-content: space-around;
  .leftcontainer {
    width: 50%;
  }
  .rigthcontainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: white;
    font-family: $first-font;
    font-size: 5rem;
    padding: 3rem;
    @media (max-width: 560px) {
      font-size: 1.8rem;
    }
  }
}
</style>
