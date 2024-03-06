import {customRef} from 'vue'

function delayRef(initValue: string, delay: number) {
    let timer:number;
    let msg1 = customRef((track, trigger) => {//track某个数据，当改动的时候trigger这个set   
        return {
            get() {
                track();
                return initValue;
            },
            set(val) {
                clearTimeout(timer);
                timer = setTimeout(() => {//可以处理数据
                    initValue = val;
                    trigger();
                }, delay);
            }
        }
    });
    return {msg1};
}

export default delayRef;