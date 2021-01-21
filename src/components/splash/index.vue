<template>
  <section class="splash-section">
    <div class="container h-100 d-flex flex-column justify-content-center">
      <article>
        <h1>Copy Command Clipboard</h1>
        <h2>
          Amazing loading animations for React. Waiting is less boring now.
        </h2>
      </article>
    </div>
    <div class="wave">
      <Wave />
    </div>
  </section>
</template>

<script>
import Wave from "../../assets/svg/wave.svg";

export default {
  name: "Splash",
  components: {
    Wave,
  },
};
</script>