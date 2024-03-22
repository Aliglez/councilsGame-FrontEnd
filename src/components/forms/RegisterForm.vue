<script setup lang="ts">

import { useAuthStore } from "../../stores/authStore";
import { ref,type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// import type { IAuthUser } from '@/models/IAuthUser';
import AuthService from '../../services/AuthService';
import type { IRegisterUser } from '../../models/IRegisterUser';
import axios from 'axios';


const store = useAuthStore()
const service = new AuthService()

const input_email: Ref<string> = ref('')
const input_password: Ref<string> = ref('')

const route = useRoute()
const router = useRouter()

const register = async () => {


  try {
    const data: IRegisterUser = {
      email: input_email.value,
      password: input_password.value,
      roles: "users",
      isAuthenticated: true,
    }
    isLoading.value = true;
    
    const responseData = await axios.post('/api/register', data);
    store.user.isAuthenticated = responseData.data.isAuthenticated;
    store.user.roles = responseData.data.roles;
    const redirectPath = '/';
    router.push(redirectPath);
  } catch (error) {
    console.error('Error al registrar:', error);

  } finally {
    isLoading.value = false;
  }

}

 const username = ref('')
 const password = ref('')
 const isLoading = ref(false);


</script>


<template>
  <body>
      <!-- <div id="container">
          <div></div>
          <div class="formRegister">
            
                  <form @submit.prevent="register()">
                    <h1 class="tittleSesion">Registro</h1>
                      <label for="correoelectronico">Correo electrónico</label>
                      <input class="input-field" type="text" v-model="input_email" required>
                      <label for="contrasena">Contraseña</label>
                      <input class="=input-field" type="password" v-model="input_password" required>
                      <button type="submit" :disabled="isLoading" class="btn btn-primary btn-lg">
                          {{ isLoading ? 'Register in...' : 'REGISTRATE' }}
                      </button>
                  </form>
          </div>
                  
      </div> -->
      <div class="FormContainer">
      <form class="formLogin">
        <h1 class="tittleSesion">Registro</h1>
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
        <button id="btnEntrar" type="submit" :disabled="isLoading" class="btn btn-primary btn-lg">
                          {{ isLoading ? 'Register in...' : 'REGISTRATE' }}
                      </button>
        <!-- <button id="btnEntrar" type="submit" class="btn btn-primary" :disabled="isLoading">{{ isLoading ? 'Logging in ...': 'LOGIN'}}</button> -->

      </form>
    </div>
  </body>
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