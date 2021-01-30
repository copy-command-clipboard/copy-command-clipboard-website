<template>
  <header>
    <nav
      class="container d-flex align-items-center align-md-items-end justify-content-between flex-md-row"
    >
      <router-link to="/">
        <Logo />
      </router-link>
      <router-link to="/installation">
        <Button color="silvertree" title="Documents" />
      </router-link>
    </nav>
  </header>
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