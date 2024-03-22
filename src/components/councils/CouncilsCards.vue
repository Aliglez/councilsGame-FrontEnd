<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

interface councils {
  id_council: number;
  nameOfCouncil: string;
}

const allCouncils = ref<councils[]>([]);

const fetchCouncils = async () => {
  const response = await axios.get("http://localhost:8080/api/v1/councils");
  allCouncils.value = response.data;
  console.log(response.data);

}
fetchCouncils;
  
  const photos = [
    '/src/assets/img/Gijon.jpg',
    '/src/assets/img/Oviedo.jpg',
    '/src/assets/img/Llanes.jpg',
    '/src/assets/img/Aviles.jpg',
    '/src/assets/img/Mieres.jpg',
    '/src/assets/img/Nava.jpg',
    // '/src/assets/img/Cangas_de_Onis.jpeg',
    // '/src/assets/img/Cangas_del_Narcea.webp',
    // '/src/assets/img/Castrillon.jpeg',
    '/src/assets/img/Ribadesella.jpg',
    '/src/assets/img/Cudillero.jpg',
  ];

  const currentPage = ref(1);
  const itemsPerPage = 4;
  const totalSlides = Math.ceil(photos.length / itemsPerPage);
  
  const getPhotosForPage = (page: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return photos.slice(startIndex, endIndex);
  };

  const previousPage = () => {
    currentPage.value = currentPage.value === 1 ? totalSlides : currentPage.value - 1;
  };
  const nextPage = () => {
    currentPage.value = currentPage.value === totalSlides ? 1 : currentPage.value + 1;
  };

  

</script>

<template>
     <div class="carousel-container">
      <div class="slides" :style="{ transform: `translateX(-${(currentPage - 1) * 100}%)` }">
        <div class="slide" v-for="(page, index) in totalSlides" :key="index">
          <div class="row">
  <div class="card" style="width: 18rem;" v-for="(photo,idx) in getPhotosForPage(page)" :key="idx">
  <img class="card-img-top" :src="photo" alt="Card image cap">
  <div class="card-body">
    <!-- <h5 class="card-title">{{ councils.nameOfCouncil }}</h5> -->
    <a href="#" class="btn btn-primary">Visitar</a>
  </div>
</div>
</div>
          </div>
        </div>
      </div>
<div class="controls">
        <div class="arrow left" @click="previousPage">&#60;</div>
        <div class="arrow right" @click="nextPage">&#62;</div>
      </div>

</template>
<style scoped lang="scss">
.row {
  display: flex;
  justify-content: space-between;
  margin: 10%;

}
</style>