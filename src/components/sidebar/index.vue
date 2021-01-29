<template>
  <aside>
    <ul v-for="item in data" :key="item.id" class="d-none d-sm-none d-md-block">
      <li>
        <h4>{{ item.title }}</h4>
      </li>
      <li v-for="subItem in item.links" :key="subItem.id">
        <router-link :to="subItem.url" :class="{ active: current === subItem.url }">
          {{ subItem.title }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import MenuData from "./data";

export default {
  data() {
    return {
      data: MenuData,
      current: window.location.pathname,
    };
  },
};
</script>

<style>
</style>