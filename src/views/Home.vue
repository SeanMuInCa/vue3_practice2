<template>
    <div>
        <h1>home</h1>
    </div>
</template>

<script lang="ts" setup name="Home">

    import{onMounted,onUnmounted}from 'vue'
    onMounted(() => {
        console.log('onMounted Home');
        
    })
    onUnmounted(() => {
        console.log('onUnmounted Home')
    })
</script>

<style scoped>

</style>