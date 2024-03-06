<template>
    <h2>{{ msg1 }}</h2>
    <input type="text" v-model="msg1">
</template>

<script setup lang="ts">
import { ref,customRef } from 'vue';


let msg = ref('hello');

let initValue = 'hello'
let msg1 = customRef(() => {
    return{
        get(){
            return initValue;
        },
        set(val){
            initValue = val;
        }
    }
})
</script>

<style scoped>

</style>