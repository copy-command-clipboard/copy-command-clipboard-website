<template>
  <div class="container">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/layout/header';

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import "./style/style.scss";
</style>