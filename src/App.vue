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
		<br>
		<h2>我的车</h2>
		<h2>{{ car.brand }}</h2>
		<h2>{{ car.price }}</h2>
		<ul>
			<li v-for="(dealer,index) in car.dealers" :key="index">在这里买{{ dealer }}</li>
		</ul>
		<button @click="changePrice">改价格</button>
		<button @click="changeBrand">改品牌</button>
		<button @click="addDealer">加经销商</button>
		<button @click="changeCar">改车</button>
	</div>
	<hr>
	<CustomRef></CustomRef>
</template>

<script setup lang="ts" name="App">
import {ref,reactive,shallowRef,shallowReactive, readonly,shallowReadonly, toRaw} from 'vue';
import CustomRef from '@/components/CustomRef.vue';
// shallowRef只能处理第一层数据，就是.value可以，再往下不行了
//这个的用处是当我只关注这个对象是否被人替换的时候，用这个，而不关注里面的属性是否变化
let sum = ref(0);
let person = ref({
	name:'raina',
	age:14,
	hobby:['sing','draw','games'],
	gender:'female'
})

//shallowReactive也差不多，只能处理一个.再往下就不行了
let car = reactive({
	brand: 'honda',
	price: 30,
	dealers:['a','b','c']
})
//shallowReadonly的理解同上面一样的
let copy = readonly(car);//全只读，ref也可以用，一样的
let copy1 = readonly(sum);//全只读，ref也可以用，一样的

let copy2 = toRaw(car);//去掉响应式的原始对象,还有个markRaw是标记用的
console.log(copy2);



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


const changePrice = () => {
	car.price += 10;
	//copy.price += 10;
}
const changeBrand = () => {
	car.brand = 'Honda'
}
const addDealer = () => {
	car.dealers.push("d")
}
const changeCar = () => {
	Object.assign(car,{
		brand: 'toyota',
		price: 20,
		dealers:['x','y','z']
	})
}
</script>

<style lang="scss" scoped>

</style>