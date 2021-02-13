<template>
  <section class="detail-section">
    <div class="container">
      <h1 class="large silvertree">Copy Command Clipboard</h1>
      <h2 class="small">{{ titles.title }}</h2>
      <div class="row">
        <div class="col-md-4">
          <Sidebar />
        </div>
        <div class="col-md-8">
          <h3>{{ titles.subTitle }}</h3>
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Sidebar from "../sidebar";
import MenuData from "../sidebar/data";

export default {
  created() {
    this.setTitles(window.location.pathname);
  },
  methods: {
    setTitles(pathname) {
      MenuData.forEach((item) => {
        item.links.forEach((subItem) => {
          if (subItem.url === pathname) {
            this.titles.title = item.title;
            this.titles.subTitle = subItem.title;
          }
        });
      });
    },
  },
  data() {
    return {
      titles: {
        title: "",
        subTitle: "",
      },
      data: MenuData,
    };
  },
  components: {
    Sidebar,
  },
};
</script>

<style>
</style>