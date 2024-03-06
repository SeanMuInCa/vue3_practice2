<template>
    <div class="child">
        {{ sum }}
        {{ res.data.content }}
        <br>
        <button @click="sum++">点我+1</button>
    </div>
</template>

<script setup lang="ts" name="Child">
import {ref} from 'vue';
import axios from 'axios'
let sum = ref(0);

let res = await axios.get('https://api.uomg.com/api/rand.qinghua?formate=json');
console.log(res);

</script>

<style scoped>
.child{
    background-color: pink;
	width: 50%;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 10px;

}
</style>