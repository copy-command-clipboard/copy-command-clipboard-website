<template>
  <div class="services-card">
    <figure>
      <component :is="dynamicIcon" />
    </figure>
    <article>
      <h4>{{ title }}</h4>
      <p>{{ detail }}</p>
    </article>
  </div>
</template>

<script>
export default {
  name: "ServicesCard",
  props: {
    title: String,
    detail: String,
    icon: String
  },
  computed: {
    dynamicIcon() {
      return () => import(`@/assets/svg/${this.icon}.svg`);
    },
  },
};
</script>