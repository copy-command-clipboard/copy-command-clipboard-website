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
          <component :is="chromeLogo" />
        </div>
      </div>
    </div>
  </Detail>
</template>

<script>
import Detail from "../components/detail";
import Explorer from "../assets/svg/explorer.svg";
import Edge from "../assets/svg/edge.svg";
import Firefox from "../assets/svg/firefox.svg";
import Opera from "../assets/svg/opera.svg";
import Safari from "../assets/svg/safari.svg";

export default {
  name: "Browser",
  components: {
    Detail,
    Explorer,
    Edge,
    Firefox,
    Opera,
    Safari,
  },
  computed: {
    chromeLogo() {
      return () => import(`@/assets/svg/chrome.svg`);
    },
  },
};
</script>
