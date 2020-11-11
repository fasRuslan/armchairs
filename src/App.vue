<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Layouts/Header/Header.vue";
import Main from "./components/Layouts/Main.vue";
import Footer from "./components/Layouts/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style>
</style>
