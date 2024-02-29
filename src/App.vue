<template>
  <Person :personList="personList" v-if="isShow"/>
</template>
<script setup lang="ts" name="App">
import Person from "@/components/Person.vue";
import { type PersonInterface, type Persons } from '@/types';

import { reactive, ref } from 'vue'

const isShow = ref(true);
// setTimeout(() => {
//   isShow.value = false;
// },5000)

let personList = reactive<Persons>([//泛型是最佳实践
  { id: `safsdf01`, name: 'zs', age: 30 },
  { id: `safsdf02`, name: 'ls', age: 12 },
  { id: `safsdf03`, name: 'ww', age: 51 }
]);
</script>
<style scoped></style>
