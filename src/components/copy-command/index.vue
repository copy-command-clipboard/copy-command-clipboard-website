<template>
  <div class="code-widget" :class="{ large: isLarge, copied: isCopied }" v-on:click="onClick">
    <div class="copy-message">Copied!</div>
    <code>{{ code }}</code>
    <i class="icon-copy"></i>
  </div>
</template>

<script>
export default {
  name: "CopyCommand",
  props: {
    code: String,
    isLarge: Boolean,
  },
  data() {
    return {
      isCopied: false,
    };
  },
  methods: {
    onClick: function () {
      console.log(this);
    },
  },
};
</script>