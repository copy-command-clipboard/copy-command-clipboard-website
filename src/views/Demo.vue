<template>
  <Detail>
    <p class="mb-2">Write anything in input:</p>
    <input v-model="commandValue" type="text" @keyup="onKeyup($event)" class="mb-5" />
    <p class="mb-2">And copy-paste:</p>
    <CopyCommand :code="commandValue" />
  </Detail>
</template>

<script>
import Detail from "../components/detail";
import CopyCommand from "../components/copy-command";

export default {
  name: "Demo",
  methods: {
    onKeyup(event) {
      this.commandValue = event.target.value;
    },
  },
  data() {
    return {
      commandValue: "npm i copy-command-clipboard",
    };
  },
  components: {
    Detail,
    CopyCommand,
  },
};
</script>
