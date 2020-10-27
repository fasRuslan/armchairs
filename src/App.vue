<template>
  <div id="app">
    <Header />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Layouts/Header.vue";
import Footer from "./components/Layouts/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>
