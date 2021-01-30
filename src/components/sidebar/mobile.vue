<template>
  <div class="select-container d-block d-sm-block d-md-none">
    <select id="sidebar" name="sidebar" @change="onChange($event)">
      <optgroup v-for="item in data" :key="item.id" :label="item.title">
          <option v-for="subItem in item.links" :key="subItem.id" :value="subItem.url" :selected="current === subItem.url">{{subItem.title}}</option>
        </optgroup>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  methods: {
    onChange(event) {
      this.$router.push({ path: event.target.value })
    },
  },
  data() {
    return {
      current: window.location.pathname,
    };
  },
};
</script>

<style>
</style>