<template>
  <section class="splash-section">
    <div class="container h-100 d-flex flex-column justify-content-center">
      <article>
        <h1>Copy Command Clipboard</h1>
        <h2>
          Amazing loading animations for React. Waiting is less boring now.
        </h2>
        <CopyCommand code="npm i copy-command-clipboard" />
      </article>
    </div>
    <div class="wave">
      <Wave />
    </div>
  </section>
</template>

<script>
import Wave from "../../assets/svg/wave.svg";
import CopyCommand from "../copy-command";

export default {
  name: "Splash",
  components: {
    Wave,
    CopyCommand
  },
};
</script>