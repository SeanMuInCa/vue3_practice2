import { ref } from "vue";

export default function useCssModule(){
    const sum = ref(0);
    const changeSum = (n:any = 1,oper = '+') => {
        console.log(n,sum);
        oper === '-' ? sum.value -= (n) : sum.value += (n);
    }

    return {
        sum,changeSum,
    }
}