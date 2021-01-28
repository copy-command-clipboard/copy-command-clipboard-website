<template>
  <section class="detail-section">
    <div class="container">
      <h1 class="large silvertree">Copy Command Clipboard</h1>
      <h2 class="small">GETTING STARTED</h2>
      <div class="row">
        <div class="col-md-4">sidebar</div>
        <div class="col-md-8">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style>
</style>