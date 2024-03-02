import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";
import { nanoid } from "nanoid";

export const useChatStore = defineStore("chitchat", () => {
	let list = reactive([
		{ id: `safsdf01`, name: "zs1", age: 30 },
		{ id: `safsdf02`, name: "ls2", age: 12 },
		{ id: `safsdf03`, name: "ww3", age: 51 },
	]);

  const getData = async () => {
    let res = await axios.get('https://api.uomg.com/api/rand.qinghua?formate=json');
   // console.log(nanoid);
    const newData:any = {
        id:nanoid(),
        name: res.data.content
    }
    console.log(newData);
    
    list.push(newData);
}

	return {list,getData};
});
