<template>
  <div class="main">
    <keep-alive :exclude="'ProductDetail'">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style lang="scss">
</style>