<template>
  <Detail>
    <div class="row">
      <div class="col-lg-4 col-md-6">
        <div class="browser-card">
          <Explorer />
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="browser-card">
          <Edge />
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="browser-card">
          <Firefox />
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="browser-card">
          <Opera />
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="browser-card">
          <Safari />
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="browser-card">
          <Chrome />
        </div>
      </div>
    </div>
  </Detail>
</template>

<script>
import Detail from "../components/detail";
import Safari from "../components/logo/safari";
import Chrome from "../components/logo/chrome";
import Explorer from "../components/logo/explorer";
import Edge from "../components/logo/edge";
import Firefox from "../components/logo/firefox";
import Opera from "../components/logo/opera";

export default {
  name: "Browser",
  components: {
    Detail,
    Explorer,
    Edge,
    Firefox,
    Opera,
    Safari,
    Chrome,
  },
};
</script>
