import { ref } from "vue";

export default function useCssModule(){
    const sum = ref(0);
    const changeSum = () => {
        sum.value++;
    }
    return {
        sum,changeSum
    }
}