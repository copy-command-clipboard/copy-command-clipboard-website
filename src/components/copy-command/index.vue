<template>
  <div class="code-widget large">
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
  },
};
</script>