<template>
  <section class="about" id="about">
    <div class="wrapper">
      <div class="about__content">
        <h2 class="about__title">{{ aboutTitle }}</h2>
        <p class="about__subtitle">
          {{ aboutSubtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      aboutTitle: "О компании",
      aboutSubtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
    };
  },
};
</script>

<style lang="scss">
.about {
  padding: 60px 2%;
  background-image: url(/img/about/fone.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  &__content {
    width: 80%;
  }

  &__title {
  }

  &__subtitle {
  }
}
.wrapper {
}
</style>