<template>
  <button v-bind:class={color}>{{ title }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: String,
    color: String,
  },
};
</script>