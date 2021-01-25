<template>
  <button :class="[color, size]">{{ title }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: String,
    color: String,
    size: String,
  },
};
</script>