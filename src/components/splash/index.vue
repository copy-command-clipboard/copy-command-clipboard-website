<template>
  <section class="splash-section">
    <div class="container h-100 d-flex flex-column justify-content-between">
      <Header />
      <article>
        <h1>Copy Command Clipboard</h1>
        <h2>Amazing loading animations for React. Waiting is less boring now.</h2>
      </article>
      <div class="wave" :style="{backgroundImage: 'url(~@/assets/svg/wave.svg)'}"></div>
    </div>
  </section>
</template>

<script>
import Header from "../layout/header";

export default {
  name: "Splash",
  components: {
    Header,
  },
};
</script>