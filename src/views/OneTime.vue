<script setup lang="ts">
import PayForm from "../components/PayForm.vue";
import { useCounterStore } from "../stores/counter";

const store = useCounterStore();
</script>

<template>
  <PayForm
    :price="25000"
    :order-id="store.orderId"
    :form="store.form"
    :discount="0"
    description="Разовая консультация 1.5 часа"
    title="Разовая консультация"
    title2="1.5 часа"
  />
</template>
