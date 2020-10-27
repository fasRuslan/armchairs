<template>
  <div class="main">
    <General />
    <About />
    <Services />
  </div>
</template>


<script>
import General from "./General.vue";
import Services from "./Services.vue";
import About from "./About.vue";

export default {
  name: "Main",
  components: {
    General,
    Services,
    About,
  },
};
</script>


<style lang="scss">
</style>