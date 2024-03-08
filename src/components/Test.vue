<template>
    <div class="bem-test">
        abc
        <div class="bem-test__inner">
            test
        </div>
        <div class="bem-test--abc">test1</div>
        <div class="bem-test--b">test2</div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@include b(test){
    color: red;
    font-size: 30px;
    @include e(inner){
        color: green;
    }
    @include m(abc){
        color: blue;
    }
    @include m(b){
        color: aqua;
    }
}


</style>