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