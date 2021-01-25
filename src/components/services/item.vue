<template>
  <div class="services-card">
    <figure>
      {{icon}}
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
  components: {
  },
  props: {
    title: String,
    detail: String,
    icon: Object
  },
};
</script>