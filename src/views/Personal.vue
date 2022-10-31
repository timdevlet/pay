<script setup lang="ts">
import PayForm from "../components/PayForm.vue";
import { useCounterStore } from "../stores/counter";

const store = useCounterStore();
</script>

<template>
  <PayForm
    :price="250000"
    :order-id="store.orderId"
    :form="store.form"
    :discount="store.discount"
    description="Индивидуальное сопровождение 2 месяца"
    title="Индивидуальное сопровождение"
    title2="2 месяца"
  />
</template>
