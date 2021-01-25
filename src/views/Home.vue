<template>
  <div class="pages">
    <Splash />
    <Services />
  </div>
</template>

<script>
import Splash from "../components/splash";
import Services from "../components/services";

export default {
  name: "Home",
  components: {
    Splash,
    Services,
  },
};
</script>
