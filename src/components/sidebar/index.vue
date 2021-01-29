<template>
  <aside>
    <div class="col-md-4" v-for="item in data" :key="item.title">
      {{ item.title }}
    </div>
  </aside>
</template>

<script>
import MenuData from "./data";

export default {
  data() {
    return {
      data: MenuData,
    };
  },
};
</script>

<style>
</style>