<script setup lang="ts">
defineProps<{
  title: string;
  title2: string;
  description: string;
  price: number;
  orderId: string;
}>();
</script>

<template>
  <div class="about">
    <div class="TinkoffPayFormContainer">
      <div class="description">
        <div class="description-small">Оплата встречи:</div>
        <div>{{ title }}</div>
        <div class="price">
          {{ price }} <span>Рублей / {{ title2 }}</span>
        </div>
      </div>

      <form name="TinkoffPayForm" onsubmit="pay(this); return false;">
        <input
          class="tinkoffPayRow"
          type="hidden"
          name="terminalkey"
          value="1558444782811"
        />
        <input class="tinkoffPayRow" type="hidden" name="frame" value="false" />
        <input class="tinkoffPayRow" type="hidden" name="language" value="ru" />
        <input
          class="tinkoffPayRow"
          placeholder="Сумма заказа"
          name="amount"
          :value="price"
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
          required
        />
        <input
          class="tinkoffPayRow"
          type="text"
          placeholder="E-mail"
          name="email"
        />
        <input
          class="tinkoffPayRow"
          type="text"
          placeholder="Контактный телефон"
          name="phone"
        />
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
  margin: 0px;

  &-small {
    font-size: 17px;
    color: rgb(125, 125, 125);
    margin-bottom: 10px;
  }

  .price {
    font-size: 45px;
    font-weight: 400;

    span {
      font-size: 20px;
    }
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
  -webkit-user-select: none;
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
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
