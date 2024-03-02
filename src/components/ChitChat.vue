<template>
    <div class="talk">
        <button @click="getData">点我获取</button>
        <ul>
            <li v-for="p in list" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script setup name="ChitChat" lang="ts">
import { reactive } from 'vue';
import axios from 'axios'
import {nanoid} from 'nanoid'
    let list = reactive([
    { id: `safsdf01`, name: 'zs1', age: 30 },
    { id: `safsdf02`, name: 'ls2', age: 12 },
    { id: `safsdf03`, name: 'ww3', age: 51 }
]);

    const getData = async () => {
        let res = await axios.get('https://api.uomg.com/api/rand.qinghua?formate=json');
       // console.log(nanoid);
        const newData:any = {
            id:nanoid(),
            name: res.data.content
        }
        console.log(newData);
        
        list.push(newData);
    }

</script>

<style  scoped>
    .talk{
        background-color: aqua;
        padding: 10px;
        border-radius: 10px;
    }
</style>