<template>
  <div class="root">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

export default {
  name: "Splash",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./style/style.scss";
</style>