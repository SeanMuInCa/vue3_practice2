<template>
	<div class="">
		<h2>sum: {{ sum }}</h2>
		<br>
		<h2>{{ person.name }} --- {{ person.age }}</h2>
		<h2>{{ person.gender }}</h2>
		<h2>Hobbies:</h2>
		<ul>
			<li v-for="(h,index) in person.hobby" :key="index"> {{ h }}</li>
		</ul>

		<button @click="add">sum+</button>
		<button @click="minus">sum-</button>
		<button @click="changeName">改名</button>
		<button @click="changeAge">改年纪</button>
		<button @click="addHobby">加爱好</button>
		<button @click="changePerson">换个人</button>
	</div>
</template>

<script setup lang="ts" name="App">
import {ref,reactive,shallowRef} from 'vue';
// shallowRef只能处理第一层数据，就是.value可以，再往下不行了
let sum = ref(0);
let person = ref({
	name:'raina',
	age:14,
	hobby:['sing','draw','games'],
	gender:'female'
})

const add = () => {
	sum.value++;
};
const minus = () => {
	sum.value--;
};

const changeName = () => {
	person.value.name = 'rainma';
}
const changeAge = () => {
	person.value.age++;
}
const changePerson = () => {
	person.value = Object.assign(person,{
		name:'rainba',
		age:42,
		hobby:['code','java'],
		gender:'male'
	})
	
}
const addHobby = () => {
	person.value.hobby.push('cat')
}
</script>

<style lang="scss" scoped>

</style>