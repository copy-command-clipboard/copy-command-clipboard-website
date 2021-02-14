<template>
  <Detail>
    <article class="detail-item">
      <h4>code</h4>
      <p class="feature"><strong>Type:</strong> String</p>
      <p class="feature"><strong>Default:</strong> ""</p>
      <p>You can control visibility.</p>
    </article>
    <article class="detail-item">
      <h4>isLarge</h4>
      <p class="feature"><strong>Type:</strong> Boolean</p>
      <p class="feature"><strong>Default:</strong> false</p>
      <p>You can control visibility.</p>
    </article>
  </Detail>
</template>

<script>
import Detail from "../components/detail";

export default {
  name: "Options",
  components: {
    Detail,
  },
};
</script>
