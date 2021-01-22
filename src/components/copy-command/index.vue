<template>
  <div class="code-widget" :class="{ large: isLarge }" v-on:click="onClick">
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
  methods: {
    onClick: function() {
      console.log('click!')
    }
  }
};
</script>