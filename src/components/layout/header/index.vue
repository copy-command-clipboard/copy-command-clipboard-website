<template>
  <div class="container">
    <header>
      <router-link to="/">
        <Logo />
      </router-link>
      <router-link to="/installation">
        <Button color="silvertree" title="Documents" />
      </router-link>
    </header>
  </div>
</template>

<script>
import Logo from "../../../assets/svg/logo.svg";
import Button from "../../form/button";

export default {
  name: "Header",
  components: {
    Logo,
    Button,
  },
};
</script>