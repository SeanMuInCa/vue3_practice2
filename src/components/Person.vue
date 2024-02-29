<template>
    <div>
        <h1>hello</h1>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { type PersonInterface, type Persons } from '@/types';
    let person:PersonInterface = {
        id:`asfsda01`,
        name:'zs',
        age:18
    }

    let personList:Persons = [
        {id: `safsdf01`, name:'zs',age: 30},
        {id: `safsdf02`, name:'ls',age: 12},
        {id: `safsdf03`, name:'ww',age: 51}
    ]
</script>

<style scoped>

</style>