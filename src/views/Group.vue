<script setup lang="ts">
import PayForm from "../components/PayForm.vue";
import { useCounterStore } from "../stores/counter";

const store = useCounterStore();
</script>

<template>
  <PayForm
    :price="150000"
    :order-id="store.orderId"
    :form="store.form"
    :discount="store.discount"
    description="Групповое наставничество"
    title="Групповое наставничество"
    title2="2 месяца"
  />
</template>
