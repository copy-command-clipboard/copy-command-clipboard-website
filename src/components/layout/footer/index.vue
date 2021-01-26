<template>
  <footer>
    <div class="container">
      <div
        class="d-flex align-items-center align-md-items-end justify-content-between flex-column flex-md-row"
      >
        <strong><a href="https://yasinkalkan.com/" target="blank">YASİN BURAK KALKAN</a> © 2021</strong>
        <Button color="silvertree" title="GET STARTED" />
      </div>
    </div>
  </footer>
</template>

<script>
import Button from "../../form/button";

export default {
  name: "Footer",
  components: {
    Button,
  },
};
</script>