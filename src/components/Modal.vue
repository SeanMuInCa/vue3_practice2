<template>
    <button @click="isShow = true">展示弹窗</button>
    <teleport to='body'>
        <div class="modal" v-show="isShow">
        <h2>标题</h2>
        <p>内容</p>
        <button @click="isShow = false">关闭</button>
    </div>
    </teleport>
</template>

<script setup lang="ts" name="Modal">
import {ref} from 'vue'
const isShow = ref(false);
</script>

<style scoped>
.modal{
    width: 200px;
    height: 200px;
    background-color: aqua;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    text-align: center;
    /* 这个写法是参考窗口定位，但是如果父元素加了一个filter属性后，就莫名的以父元素定位了 */
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>