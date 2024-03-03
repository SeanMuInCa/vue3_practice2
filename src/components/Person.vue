<template>
    <div>
        <ul>
            <li v-for="item in personList" :key="item.id">{{ item.name }} --- {{ item.age }}</li>
        </ul>
    </div>
    <h1>{{ sum }}</h1>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="changeSum(n)">点我+</button>
    <button @click="changeSum(n,'-')">点我-</button>
    <hr>
    <h1>{{ countStore.count }}</h1>
    <h1>{{ countStore.doubleCount }}</h1>
    <button @click="countStore.increment()">按钮2</button>
    <button @click="addMore">按钮3</button>
    <hr>
    <button @click="getDog">再来一个</button>
    <br>
    <img v-for="(url, index) in dogList" :key="index" :src="url" alt="">
</template>

<script lang="ts" setup name="Person">


import { onBeforeMount, onMounted, withDefaults, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted,ref,toRefs } from 'vue';
import { type PersonInterface, type Persons } from '@/types/index';
import useSum from '@/composition/useSum';
import useDog from '@/composition/useDog';
import {useCounterStore} from '@/stores/counter'

const {sum,changeSum} = useSum();//最佳实践
const {dogList,getDog} = useDog();//最佳实践

const n = ref(0);
const countStore = useCounterStore();
//我之前犯过的错误，我知道了，解构需要torefs，但是不推荐这么写，这个玩意好危险
//const {count, doubleCount, increment} = toRefs(useCounterStore());
console.log('@@',countStore);

const addMore = () => {
    countStore.$patch({//一次性修改所有属性，取决于你函数写在哪里，写在store里，就直接用那边的
        count : 999
    })
}



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