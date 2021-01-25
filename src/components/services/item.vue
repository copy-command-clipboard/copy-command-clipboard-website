<template>
  <div class="services-card">
    <figure>
      <Hand />
    </figure>
    <article>
      <h4>Simple to use</h4>
      <p>Easy to use and understandable options.</p>
    </article>
  </div>
</template>

<script>
import Hand from "../../assets/svg/hand.svg";

export default {
  name: "ServicesCard",
  components: {
    Hand,
  },
  props: {
    title: String,
  },
};
</script>