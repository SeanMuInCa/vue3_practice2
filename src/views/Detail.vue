<template>
    <ul class="list">
        <!-- <li>{{ route.query.id }}</li>
        <li>{{ route.query.title }}</li>
        <li>{{ route.query.content }}</li> -->
        <li>{{ route.params.id }}</li>
        <li>{{ route.params.title }}</li>
        <li>{{ route.params.content }}</li>

    </ul>
</template>

<script lang="ts" setup name="Detail">
import {useRoute} from 'vue-router';
const route = useRoute();
console.log(route);

</script>

<style scoped>
.list{
    list-style: none;
    padding-left: 20px;
}
.list>li{
    line-height: 30px;
}

</style>