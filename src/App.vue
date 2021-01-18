<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "./components/layout/header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "./style/style.scss";
</style>