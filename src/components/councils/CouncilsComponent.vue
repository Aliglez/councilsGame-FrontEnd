<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue';

interface councils {
    id_council: number;
    nameOfCouncil: string;
}

const allCouncils = ref<councils[]>([]);

const fetchCouncils = async () => {
    // const response = await axios.get('VITE_API_ENDPOINT_COUNCILS');
    const response = await axios.get('http://localhost:8080/api/v1/councils');
    allCouncils.value  = response.data;
    console.log(response.data);
}
fetchCouncils();


</script>
<template>
    <div class="councilLink">
        <a v-for="councils in allCouncils" v-bind:value ="councils.nameOfCouncil" :key="councils.id_council" href="#" class="badge badge-light">{{ councils.nameOfCouncil }}</a>
    </div>
</template>
<style scoped lang="scss">
@import '../../assets/_variables.scss';

a {
    font-family: $first-font;
    color: $dark-blue;
    text-decoration: none;
}
</style>