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
        {
          title: "Documentation",
          detail: "Descriptive and easy to read documentation.",
          icon: "book",
        },
        {
          title: "Editable",
          detail: "Editable features.",
          icon: "puzzle",
        },
        {
          title: "UI/UX",
          detail: "User friendly interface.",
          icon: "brush",
        },
        {
          title: "Open Source",
          detail: "You can review my code and support me.",
          icon: "open-source",
        },
      ],
    };
  },
  props: {
    title: String,
  },
};
</script>