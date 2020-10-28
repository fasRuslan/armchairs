<template>
  <div class="main">
    <General />
    <Benefit />
    <Advantages />
    <Services />
    <About />
    <Stages />
    <Reviews />
  </div>
</template>


<script>
import General from "./General.vue";
import Benefit from "./Benefit.vue";
import Advantages from "./Advantages.vue";
import About from "./About.vue";
import Stages from "./Stages.vue";
import Services from "./Services.vue";
import Reviews from "./Reviews.vue";

export default {
  name: "Main",
  components: {
    General,
    Benefit,
    Advantages,
    Stages,
    Services,
    About,
    Reviews,
  },
};
</script>


<style lang="scss">
</style>