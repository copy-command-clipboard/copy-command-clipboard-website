<template>
  <button :class="color">{{ title }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: String,
    color: String
  },
};
</script>