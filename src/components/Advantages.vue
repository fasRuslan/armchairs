<template>
  <section class="advantages">
    <div class="wrapper">
      <h2 class="advantages__title">Почему выбирают нас?</h2>
      <ul class="advantages__list">
        <li
          class="advantages__item"
          v-for="(advantage, index) in advantagesList"
          :key="index"
        >
          <h3 class="advantages__item-title">{{ advantage.title }}</h3>
          <p class="advantages__item-subtitle">{{ advantage.subtitle }}</p>
        </li>
      </ul>
      <img :src="advantagesPicture" alt="" class="advantages__picture" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      advantagesList: [
        {
          title: "ДОГЛОВЕЧНОСТЬ",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
          title: "ПРАКТИЧНОСТЬ",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
          title: "ВНИМАНИЕ К МЕЛОЧАМ",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
          title: "МАКСИМАЛЬНЫЙ КОМФОРТ",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
      ],
      advantagesPicture: "/img/advantages/armchair.png",
    };
  },
};
</script>


<style lang="scss">
.advantages {
  padding: 60px 2%;
  &__title {
  }

  &__list {
  }

  &__item {
  }

  &__item-title {
  }

  &__item-subtitle {
  }

  &__picture {
  }
}
</style>