<template>
    <h2>{{ msg1 }}</h2>
    <input type="text" v-model="msg1">
</template>

<script setup lang="ts">
import { ref, customRef } from 'vue';
import delay from '@/utils/delay'

let msg = ref('hello');

let msg1 = delay("hello", 1000);
// let timer:number;
// let initValue = 'hello'
// let msg1 = customRef((track, trigger) => {//track某个数据，当改动的时候trigger这个set   
//     return{
//         get(){
//             track();
//             return initValue;
//         },
//         set(val){
//             clearTimeout(timer);
//             timer = setTimeout(() => {//可以处理数据
//                 initValue = val;
//                 trigger();  
//             }, 1000);
//         }
//     }
// })





</script>

<style scoped></style>