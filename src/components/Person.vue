<template>
    <div>
        <ul>
            <li v-for="item in personList" :key="item.id">{{ item.name }} --- {{ item.age }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="Person" :props="props">


    import { defineProps } from 'vue';
    import { type PersonInterface, type Persons } from '@/types';
    let person:PersonInterface = {
        id:`asfsda01`,
        name:'zs',
        age:18
    }
    defineProps(['personList']);
    let personList:Persons = [
        {id: `safsdf01`, name:'zs',age: 30},
        {id: `safsdf02`, name:'ls',age: 12},
        {id: `safsdf03`, name:'ww',age: 51}
    ]
</script>

<style scoped>

</style>