<script setup lang="ts">
import { computed } from "vue";
import Timer from "../components/Timer";
import moment from "moment";

const props = defineProps<{
  title: string;
  title2: string;
  description: string;
  price: number;
  orderId: string;
  form: {
    fio: string;
    email: string;
    phone: string;
    promocode: string;
    validPromocode: any;
  };
}>();

const priceWithDiscount = computed({
  get() {
    const promocode = props.form.validPromocode;
    if (!promocode || promocode?.value <= 0) {
      return props.price;
    }

    if (props.price - promocode.value <= 0) {
      return props.price;
    }

    if (props.price - promocode.value > 0) {
      return props.price - promocode.value;
    }

    return props.price;
  },
  set() {},
});

const TINKOFF_ID='1667218758791'

function numberWithSpaces(x: number) {
  let parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}

function format(x: number) {
  if (x < 10) {
    return `0${x}`;
  }
  return x;
}
</script>

<template>
  <div class="about">
    <div class="TinkoffPayFormContainer">
      <div class="description">
        <div class="description-small"></div>
        <div class="description-title">{{ title }}</div>
        <div class="price">
          {{ numberWithSpaces(priceWithDiscount)
          }}<span class="description-price">₽</span>
          <div class="description-price-details"># {{ title2 }}</div>
        </div>
      </div>

      <form name="TinkoffPayForm" onsubmit="pay(this); return false;">
        <input
          class="tinkoffPayRow"
          type="hidden"
          name="terminalkey"
          :value="TINKOFF_ID"
        />
        <input class="tinkoffPayRow" type="hidden" name="frame" value="false" />
        <input class="tinkoffPayRow" type="hidden" name="language" value="ru" />
        <input
          class="tinkoffPayRow"
          placeholder="Сумма заказа"
          name="amount"
          :value="priceWithDiscount"
          type="hidden"
          required
        />
        <input
          class="tinkoffPayRow"
          type="hidden"
          placeholder="Номер заказа"
          name="order"
          :value="orderId"
        />
        <input
          class="tinkoffPayRow"
          type="hidden"
          :placeholder="description"
          name="description"
          disabled
        />
        <input
          class="tinkoffPayRow"
          type="text"
          placeholder="ФИО плательщика"
          name="name"
          v-model="form.fio"
          required
        />
        <input
          class="tinkoffPayRow"
          type="text"
          placeholder="E-mail"
          v-model="form.email"
          name="email"
        />
        <input
          class="tinkoffPayRow"
          type="text"
          placeholder="Контактный телефон"
          v-model="form.phone"
          name="phone"
        />

        <input
          class="tinkoffPayRow"
          type="text"
          placeholder="Промокод"
          v-model="form.promocode"
          name="promocode"
        />

        <Timer
          key="timer"
          v-if="form.validPromocode?.until"
          :time="
            moment(form.validPromocode?.until).diff(moment(), 'second') * 1000
          "
          v-slot="{ hours, minutes, seconds }"
          style="margin-left: 10px"
        >
          До конца действия промокода {{ format(hours) }}:{{
            format(minutes)
          }}:{{ format(seconds) }}
        </Timer>
 
        <input class="tinkoffPayRow btn" type="submit" value="К оплате" />
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.tinkoffPayRow {
  display: block;
  margin: 1%;
  width: 160px;
}

.TinkoffPayFormContainer {
  max-width: 470px;
  width: 100%;
  display: block;
  position: relative;
}

div.description {
  font-size: 30px;
  font-weight: bold;
  font-family: tuiText, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Segoe UI", "Helvetica Neue", sans-serif;
  padding-left: 5px;
  margin: 0px 0px 15px 0px;

  &-title {
    line-height: 1.2;
    max-width: 200px;
  }

  &-small {
    font-size: 17px;
    color: rgb(125, 125, 125);
    margin-bottom: 10px;
  }

  .price {
    font-size: 45px;
    font-weight: 400;

    span {
      font-size: 22px;
    }
  }

  &-price-details {
    margin-top: -10px;
    font-size: 18px;
    color: rgb(125, 125, 125);
  }
}

input[type="text"] {
  color: rgba(0, 0, 0, 0.8);
  display: block;
  font-family: tuiText, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Segoe UI", "Helvetica Neue", sans-serif;
  font-size: 15px;
  border: 0;
  font-style: normal;
  padding: 10px;
  border-radius: 4px;

  line-height: 24px;

  background-color: #ecf1f7;

  text-align: left;
  text-rendering: optimizeLegibility;
  width: 100%;
}

.btn {
  border: none;

  -webkit-font-smoothing: antialiased;
  appearance: none;

  background-clip: border-box;
  background-color: #ffdd2d;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-sizing: border-box;
  color: #332c0cc2;
  cursor: pointer;
  display: block;
  font-family: tuiText, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Segoe UI", "Helvetica Neue", sans-serif;
  font-size: 15px;
  font-stretch: normal;
  font-style: normal;
  font-variant-caps: normal;
  font-weight: 400;
  height: 56px;
  letter-spacing: normal;
  line-height: 24px;
  overflow-wrap: break-word;
  padding-bottom: 0px;
  padding-left: 36px;
  padding-right: 36px;
  padding-top: 0px;
  position: relative;
  text-align: center;
  text-indent: 0px;
  text-rendering: optimizeLegibility;
  text-shadow: none;
  text-transform: none;
  transition-duration: 0.3s;
  transition-property: color, background, opacity;
  transition-timing-function: ease-in-out;
  width: 138px;
  word-spacing: 0px;
  writing-mode: horizontal-tb;
  z-index: 0;
}

.btn:hover {
  background-color: rgb(250, 182, 25);
}

@media (min-width: 1024px) {
}
</style>
