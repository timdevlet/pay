<script setup lang="ts">
import PayForm from "../components/PayForm.vue";
import { useCounterStore } from "../stores/counter";

const store = useCounterStore();
</script>

<template>
  <PayForm
    :price="2000"
    :order-id="store.orderId"
    :form="store.form"
    description="Оплата встречи гении и аутсайдеры. Один гость - 2000 рублей"
    title="Гении и аутсайдеры"
    title2="Один гость 😊"
  />
</template>
