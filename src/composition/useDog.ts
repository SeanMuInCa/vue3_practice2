import axios from "axios";
import { reactive } from "vue";
export default function useDog() {
	//https://dog.ceo/api/breed/pembroke/images/random
	let dogList = reactive<any>([
        `https://images.dog.ceo/breeds/pembroke/n02113023_710.jpg`
    ]);

	const getDog = async () => {
		try {
			let res = await axios.get(
				"https://dog.ceo/api/breed/pembroke/images/random"
			);
			console.log(res.data.message);
			dogList.push(res.data.message);
		} catch (error: any) {
			console.log(error.message);
		}
		console.log(dogList);
	};
    return {
        dogList,getDog
    }
}
