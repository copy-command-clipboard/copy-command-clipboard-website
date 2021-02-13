<template>
  <Detail>
    <article class="detail-item">
      <h4>Import</h4>
      <p class="mb-4">Firstly import copy-command-clipboard library.</p>
      <CopyCommand code="import CopyCommandClipboard from 'copy-command-clipboard';" />
    </article>
    <article class="detail-item">
      <h4>Usage</h4>
      <p class="mb-4">In the simplest form, you can use it this way.</p>
      <CopyCommand code="<CopyCommandClipboard code='npm i copy-command-clipboard' />" />
    </article>
  </Detail>
</template>

<script>
import Detail from "../components/detail";
import CopyCommand from "../components/copy-command";

export default {
  name: "Usage",
  components: {
    Detail,
    CopyCommand,
  },
};
</script>
