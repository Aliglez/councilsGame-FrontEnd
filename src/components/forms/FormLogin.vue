<script setup lang="ts">

</script>

<template>
    <div class="FormContainer">
      <form class="formLogin">
        <h1 class="tittleSesion">Iniciar Sesión</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Usuario:</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            
          />
          <div id="emailHelp" class="form-text">
            
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Contraseña</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            
          />
        </div>
        <button id="btnEntrar" type="submit" class="btn btn-primary">Entrar</button>
        <p>¿Aún no estás registrado?</p>
        <a class="linkRegistro" href="/registro">Hazlo aquí</a>
      </form>
    </div>
  </template>
  <style scoped lang="scss">
  @import "../../assets/variables";
  
  .FormContainer {
    font-family: $first-font;
    background-color: $green;
    border-radius: 30px;
    text-align: center;
  
    .formLogin {
      display: flex;
      flex-direction: column;
      align-items: center;
  
      .tittleSesion {
        color: white;
        padding: 1.5rem;
      }
  
      .form-label {
        color: white;
        font-size: 1.3rem;
      }
  
      .form-control {
        width: fit-content;
      }
  
      #btnEntrar {
          background-color: $yellow;
          font-size:larger;
          color: $dark-blue;
          border-radius: 15px;
          padding-left: 1.2rem;
          padding-right: 1.2rem;
          margin-bottom: 1rem;
      }
  
      p {
          color: white;
          margin-bottom: 0px;
      }
  
      .linkRegistro {
          color: white;
          padding-bottom: 1rem;
          text-decoration-line: none;
      }
      
    }
  }
  </style>
  