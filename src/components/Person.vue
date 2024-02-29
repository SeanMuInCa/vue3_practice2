<template>
    <div>
        <ul>
            <li v-for="item in personList" :key="item.id">{{ item.name }} --- {{ item.age }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="Person" :props="props">


    import { withDefaults } from 'vue';
    import { type PersonInterface, type Persons } from '@/types/index';
    let person:PersonInterface = {
        id:`asfsda01`,
        name:'zs',
        age:18
    }

    let list:Persons = [
        {id: `safsdf01`, name:'zs1',age: 30},
        {id: `safsdf02`, name:'ls2',age: 12},
        {id: `safsdf03`, name:'ww3',age: 51}
    ];


    withDefaults(defineProps<{personList?:Persons}>(),{
        personList:() => [{id:'adfa',name:'adfa',age:1}]//默认值
    });
    
</script>

<style scoped>

</style>