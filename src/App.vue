<template>
  <div class="root">
    <div class="container">
      <Header />
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/layout/header";

export default {
  name: "Splash",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./style/style.scss";
</style>