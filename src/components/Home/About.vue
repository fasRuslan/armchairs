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
        "Мы поставили наши кресла более чем 500 организациям. Среди них государственные учреждения, представители малого, среднего и крупного бизнеса. С некоторыми мы сотрудничаем уже более 15 лет.",
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