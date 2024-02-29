<template>
    <div>
        <ul>
            <li v-for="item in personList" :key="item.id">{{ item.name }} --- {{ item.age }}</li>
        </ul>
    </div>
    <h1>{{ sum }}</h1>
    <button @click="changeSum">点我</button>
    <hr>
    <button @click="getDog">再来一个</button>
    <br>
    <img v-for="(url, index) in dogList" :key="index" :src="url" alt="">
</template>

<script lang="ts" setup name="Person">


import { onBeforeMount, onMounted, withDefaults, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
import { type PersonInterface, type Persons } from '@/types/index';
import useSum from '@/composition/useSum';
import useDog from '@/composition/useDog';

const {sum,changeSum} = useSum();//最佳实践
const {dogList,getDog} = useDog();//最佳实践







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


withDefaults(defineProps<{ personList?: Persons }>(), {
    personList: () => [{ id: 'adfa', name: 'adfa', age: 1 }]//默认值
});

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

onBeforeUnmount(() => {
    console.log('onBeforeUnmount');

})
onUnmounted(() => {
    console.log('onUnmounted');

})
</script>

<style scoped>
img {
    height: 100px;
    margin: 10px;
}
</style>