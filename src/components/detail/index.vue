<template>
  <section class="detail-section">
    <div class="container">
      <h1>{{ title }}</h1>
      <div class="row">
        <div class="col-md-4">sidebar</div>
        <div class="col-md-8">
          <template></template>
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