<template>
  <div class="container">
    <header>
      <Logo />
      <Button title="Documents" />
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
  }
};
</script>