import { ref, computed } from "vue";
import { defineStore } from "pinia";

import moment, { type Moment } from "moment";

class Promocode {
  code: string = "xskfnvklsl";
  until: Moment = moment();
  value: number = 0;

  isValid(): boolean {
    return this.until.diff(moment(), "seconds") > 0;
  }

  constructor(code: string, until: Moment, value: number) {
    this.code = code
    this.until = until
    this.value = value
  }
};

export const useCounterStore = defineStore("counter", () => {
  const date = new Date();

  console.log();

  const makeid = (length: number) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
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

  const orderId = `${formatMap.yy}${formatMap.mm}${formatMap.dd}-${
    formatMap.hh
  }-${formatMap.ii}-${formatMap.ss}-${makeid(3).toUpperCase()}`;

  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  const form = ref({
    fio: "",
    email: "",
    phone: "",
    promocode: "",
    validPromocode: {} as Promocode | null,
  });

  const valid = ref(true);

  setInterval(() => {
    const promocode = form.value.promocode;

    console.log(getCurrentPromocode(20));
    console.log(getCurrentPromocode(30));

    const dayPromocode20 = getCurrentPromocode(20);
    const dayPromocode30 =  getCurrentPromocode(30);

    if (promocode == dayPromocode30?.code && dayPromocode30?.isValid()) {
      form.value.validPromocode = dayPromocode30;
    } else if (promocode == dayPromocode20?.code && dayPromocode20?.isValid()) {
      form.value.validPromocode = dayPromocode20;
    } else {
      form.value.validPromocode = null;
    }
  }, 1500);

  const codes30 = [
    "squash",
    "spaghetti",
    "cupcake",
    "cheesecake",
    "limepie",
    "mozzarella",
    "yoghurt",
    "pancake",
    "broccoli",
    "dessert",
    "cocoa",
    "mushroom",
    "icecream",
  ];

  const codes20 = [
    "gogogo",
    "justdoit",
    "haveagoodday",
    "ormygod",
    "viktory",
    "myday",
    "hellovika",
  ];

  let refreshEnd = moment().endOf('day')

  let dayPromocode: Promocode | null = null;
  function getCurrentPromocode(amount: 20 | 30): Promocode | null {
    const codes = amount == 20 ? codes20 : codes30;

    let k = 0;
    const endOfDay = moment().endOf("day");
    //const endOfDay = refreshEnd;
    const currentDay = moment().dayOfYear();
    for (let i = 0; i < 360; i++) {
      if (k >= codes.length) {
        k = 0;
      }

      if (i == currentDay) {
        dayPromocode = new Promocode(
          codes[k], endOfDay, amount == 20 ? 20_000 : 30_000
        );
  
        return dayPromocode;
      }

      k++;
    }

    return null;
  }
 

  return { makeid, orderId, count, doubleCount, increment, form, valid };
});
