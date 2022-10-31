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

<style lang="scss">
.logo {
  position: fixed;
  top: 0px;
  width: 30px;
}

.MyClass {
  background-color: #e9e3db34;
}

nav {
  text-align: left;
  margin-left: -5px;
  font-size: 18px;

  padding: 1rem 0;

  a {
    font-size: 24px;
    text-decoration: none;
    color: rgb(89, 89, 89);
    transition: 0.3s;
    padding: 1px 3px;
    margin: 5px 10px;
    display: inline-block;
    border-bottom: 2px solid rgba(0, 0, 0, 0);

    &:hover {
      color: black;
    }

    &.router-link-active {
      border-bottom: 2px solid black;
    }
  }
}

@media (min-width: 804px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
