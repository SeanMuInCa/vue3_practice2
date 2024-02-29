<template>
    <div>
        <ul>
            <li v-for="item in personList" :key="item.id">{{ item.name }} --- {{ item.age }}</li>
        </ul>
    </div>
    <h1>{{ sum }}</h1>
    <button @click="changeSum">点我</button>
</template>

<script lang="ts" setup name="Person">


import { onBeforeMount, onMounted, ref, withDefaults, onBeforeUpdate, onUpdated, } from 'vue';
import { type PersonInterface, type Persons } from '@/types/index';
const sum = ref(0);
let person: PersonInterface = {
    id: `asfsda01`,
    name: 'zs',
    age: 18
}

let list: Persons = [
    { id: `safsdf01`, name: 'zs1', age: 30 },
    { id: `safsdf02`, name: 'ls2', age: 12 },
    { id: `safsdf03`, name: 'ww3', age: 51 }
];

const changeSum = () => {
    sum.value++;
}
withDefaults(defineProps<{ personList?: Persons }>(), {
    personList: () => [{ id: 'adfa', name: 'adfa', age: 1 }]//默认值
});
console.log(sum.value);
onBeforeMount(() => {
    console.log('onBeforeMount');
    
}),
onMounted(() => {
    console.log('onMounted');//setup before mounted
    
})
onBeforeUpdate(() => {
    console.log('onBeforeUpdate');
    
})
onUpdated(() => {
    console.log('onUpdated');
    
})
</script>

<style scoped></style>