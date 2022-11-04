<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<script lang="ts">
export default {
  computed: {
    isSignIn() {
      const body = document.body;

      if (this.$route.path === "/with-guest") {
        body.classList.add("MyClass");
      } else {
        body.classList.remove("MyClass");
      }

      return this.$route.path === "/with-guest";
    },
  },
};
</script>

<template>
  <header>
    <img src="/src/assets/logo.png" class="logo" alt="vika devlet logo" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Иду один</RouterLink>
        <RouterLink to="/with-guest">Иду с другом</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <span v-if="isSignIn"></span>
</template>

<style lang="scss"></style>
