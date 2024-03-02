<template>
    <div class="talk">
        <button @click="chatStore.getData">点我获取</button>
        <ul>
            <li v-for="p in chatStore.list" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script setup name="ChitChat" lang="ts">
import {useChatStore} from '@/stores/chitchat'

const chatStore = useChatStore();

</script>

<style  scoped>
    .talk{
        background-color: aqua;
        padding: 10px;
        border-radius: 10px;
    }
</style>