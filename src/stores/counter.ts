import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const date = new Date();

  const makeid = (length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const formatMap = {
    ss: date.getSeconds(),
    ii: date.getMinutes(),
    hh: date.getHours(),
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };

  const count = ref(0);

  const orderId = `${formatMap.yy}${formatMap.mm}${formatMap.dd}-${formatMap.hh}-${formatMap.ii}-${formatMap.ss}-${makeid(3).toUpperCase()}`;

  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { makeid, orderId, count, doubleCount, increment };
});
