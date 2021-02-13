<template>
  <Detail>
    <article class="detail-item">
      <h4>Github</h4>
      <p class="mb-4">You can clone repo from Github and free use in your project. Copy this code and paste code in console.</p>
      <CopyCommand code="git clone https://github.com/copy-command-clipboard/copy-command-clipboard.git" />
    </article>
    <article class="detail-item">
      <h4>NPM</h4>
      <p class="mb-4">You can download up to date npm package. Copy this code and paste code in console.</p>
      <CopyCommand code="npm i copy-command-clipboard" />
    </article>
  </Detail>
</template>

<script>
import Detail from "../components/detail";
import CopyCommand from "../components/copy-command";

export default {
  name: "Installation",
  components: {
    Detail,
    CopyCommand,
  },
};
</script>
