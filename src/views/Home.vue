<template>
  <div class="home-content">
    <Splash />
    <Services />
    <DevelopmentEnvironments />
  </div>
</template>

<script>
import Splash from "../components/splash";
import Services from "../components/services";
import DevelopmentEnvironments from "../components/development-environments";

export default {
  name: "Home",
  components: {
    Splash,
    Services,
    DevelopmentEnvironments,
  },
};
</script>
