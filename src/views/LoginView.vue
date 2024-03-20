<script setup>
import FormLogin from "@/components/forms/FormLogin.vue";
</script>

<template>
  <main>
    <body class="img_cow">
      <div class="body_container">
        <div class="leftcontainer"></div>
        <div class="rigthcontainer">
          <h1>BIENVENID@S</h1>

          <FormLogin />
        </div>
      </div>
    </body>
  </main>
</template>
<style scoped lang="scss">
@import "../assets/variables";

.img_cow {
  background-image: url("../assets/img/vaca_lagos.jpg");
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
