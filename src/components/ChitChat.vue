<template>
    <div class="talk">
        <button @click="getData">点我获取</button>
        <ul>
            <li v-for="p in list" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script setup name="ChitChat" lang="ts">
import {useChatStore} from '@/stores/chitchat'
import {storeToRefs} from 'pinia';
const chatStore = useChatStore();
const {list} = storeToRefs(chatStore);

chatStore.$subscribe(() => {//这玩意会一直监测变化,store里任何数据变了，都会被调用，就是watch
    console.log(list.value);
    //list.value.shift();
    
})
const getData = () => {
    chatStore.getData();
}

</script>

<style  scoped>
    .talk{
        background-color: aqua;
        padding: 10px;
        border-radius: 10px;
    }
</style>