<template>
  <section class="services-section">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="item in list" :key="item.title">
          <Item :title="item.title" :detail="item.detail" :icon="item.icon" />
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
  data() {
    return {
      list: [
        {
          title: "Simple to use",
          detail: "Easy to use and understandable options.",
          icon: "hand",
        },
        {
          title: "Browser Support",
          detail: "Browser friendly animation.",
          icon: "world",
        },
      ],
    };
  },
  props: {
    title: String,
  },
};
</script>