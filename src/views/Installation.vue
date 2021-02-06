<template>
  <Detail title="Installation">
    <article className="detail-item">
      <h4>Github</h4>
      <p className="mb-4">
        You can clone repo from Github and free use in your project. Copy this
        code and paste code in console.
      </p>
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
