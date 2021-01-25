<template>
  <section class="services-section">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <Item />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Item from "./item";

export default {
  name: "ServicesSection",
  components: {
    Item,
  },
  props: {
    title: String
  },
};
</script>