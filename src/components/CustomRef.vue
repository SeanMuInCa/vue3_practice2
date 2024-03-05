<template>
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg">
</template>

<script setup lang="ts">
import { ref,customRef } from 'vue';


let msg = ref('hello');

let msg1 = customRef(() => {
    return{
        get(){

        },
        set(){

        }
    }
})
</script>

<style scoped>

</style>