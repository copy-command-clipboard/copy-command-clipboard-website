<template>
  <div id="app">
    <Header />
    <Logo />
  </div>
</template>

<script>
import Header from "./components/layout/header";
import Logo from "./assets/svg/logo.svg";

export default {
  name: "App",
  components: {
    Header,
    Logo
  },
};
</script>

<style lang="scss">
@import "./style/app.scss";
</style>