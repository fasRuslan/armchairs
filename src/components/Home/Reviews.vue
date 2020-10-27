<template>
  <section class="reviews">
    <div class="wrapper">
      <h2 class="reviews__title">Отзывы наших довольных клиентов</h2>
      <template v-if="reviewsList.length > 0">
        <VueAgile class="reviews__item" :options="sliderOpt">
          <div v-for="(slide, index) in reviewsList" :key="index">
            <div
                    class="reviews__slider-content d-flex align-items-center flex-wrap"
            >
              <h3 class="slider__title">
                {{ slide.title }}
              </h3>

              <img v-bind:src="slide.img" alt="" />

              <p class="slider__description">
                {{ slide.description }}
              </p>
            </div>
          </div>
        </VueAgile>
      </template>
    </div>
  </section>
</template>

<script>
import { VueAgile } from "vue-agile";
export default {
  name: "Reviews",
  components: {
    VueAgile,
  },
  data() {
    return {
      reviewsList: [
        {
          img: "/img/rewiews/person.png",
          title: "Дмитрий Рогалев",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          img: "/img/rewiews/person.png",
          title: "Дмитрий Рогалев",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          img: "/img/rewiews/person.png",
          title: "Дмитрий Рогалев",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          img: "/img/rewiews/person.png",
          title: "Дмитрий Рогалев",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
      sliderOpt: {
        slidesToShow: 2,
        SlidesToScroll: 2,
        navButtons: true,
        dots: false,
      },
    };
  },
};
</script>
<style lang="scss">
.reviews {
  &__title {
  }

  &__item {
  }

  &__slider-content {

  }
  .slider {
    &__title {
      margin-right: 30px;
    }

    &__description {
      max-width: 100%;
      margin-right: 20px;
      margin-left: 20px;
    }
  }
}
</style>