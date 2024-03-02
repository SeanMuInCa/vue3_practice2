<template>
    <div>
        <h1>home</h1>
    </div>
</template>

<script lang="ts" setup name="Home">

    import{onMounted,onUnmounted}from 'vue'
    import{useRouter}from 'vue-router';

    const router = useRouter();
    console.log(router);
    
    onMounted(() => {
        console.log('onMounted Home');
        setTimeout(() => {
            console.log('go router');
            
            router.push('/news');//最佳实践
        },5000)
    })
    onUnmounted(() => {
        console.log('onUnmounted Home')
    })
</script>

<style scoped>

</style>