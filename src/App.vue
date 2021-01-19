<template>
  <div class="container">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/installation">Installation</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./style/style.scss";
</style>