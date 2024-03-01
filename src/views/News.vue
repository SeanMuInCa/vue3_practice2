<template>
    <div>
        <ul>
            <!-- query写法 -->
            <!-- <li v-for="news in newsList" :key="news.id"><router-link :to="{name:'detailPage',query:{id:news.id,title:news.title,content:news.content}}">{{ news.title }}</router-link></li> -->
            <!-- params写法 这么写路由要有改动,不支持数组 -->
            <li v-for="news in newsList" :key="news.id"><router-link :to="{name:'detailPage',params:{id:news.id,title:news.title,content:news.content}}">{{ news.title }}</router-link></li>
        </ul>
        <div class="details">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts" setup name="News">
import {reactive} from 'vue';

    const newsList = reactive([
        {id:'weqrsd01', title: '新闻001',content:'a'},
        {id:'weqrsd02', title: '新闻002',content:'b'},
        {id:'weqrsd03', title: '新闻003',content:'c'},
        {id:'weqrsd04', title: '新闻004',content:'d'},
    ])
</script>

<style scoped>


</style>