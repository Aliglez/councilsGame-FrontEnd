<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useAuthStore } from '@/stores/authStore';
import type { IAuthUser } from '@/models/IAuthUser';
import AuthService from '@/services/AuthService';


const store = useAuthStore()
const service = new AuthService()

const input_email: Ref<string> = ref('')
const input_password: Ref<string> = ref('')

const route = useRoute()
const router = useRouter()

const login = async () => {

  store.user.email = input_email.value

  const data: IAuthUser = {
    email: input_email.value,
    password: input_password.value
  }

  const responseData = await service.login(data)
  console.log(responseData)

  if (input_email.value == store.user.email) {
    store.user.isAuthenticated = responseData.isAuthenticated
    store.user.roles = responseData.roles
    const redirectPath = '/'
    router.push(redirectPath)
  }
  
}

const username = ref('')
const password = ref('')
const isLoading = ref(false)


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
            v-model="input_email"
            
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
            v-model="input_password"
            
          />
        </div>
        <button id="btnEntrar" type="submit" class="btn btn-primary" :disabled="isLoading">{{ isLoading ? 'Logging in ...': 'LOGIN'}}</button>
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
  