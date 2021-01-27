<template>
  <div
    class="code-widget"
    :class="{ large: isLarge, copied: isCopied }"
    v-on:click="onClick"
  >
    <div class="copy-message">Copied text to clipboard.</div>
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
    onClick() {
      this.isCopied = true;
      navigator.clipboard.writeText(this.code);
      this.resetCopiedInfo();
    },
    resetCopiedInfo() {
      let resetInterval = setInterval(() => {
        this.isCopied = false;

        clearInterval(resetInterval);
      }, 3000);
    },
  },
};
</script>