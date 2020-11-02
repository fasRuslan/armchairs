<template>
  <section class="reviews" id="reviews">
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

              <img
                v-bind:src="slide.img"
                alt=""
                class="reviews__slider-person"
              />

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
          description: "Заказываю не первый раз, все оперативно и быстро",
        },
        {
          img: "/img/rewiews/2.jpg",
          title: "Татьяна Науменко",
          description:
            "Долго сомневалась, потому что много китайского не качественного барахла. Была приятно удивлена качеством",
        },
        {
          img: "/img/rewiews/3.jpg",
          title: "Артем Лебедев",
          description:
            "Заказываю не первый раз, при повторном обращении скидка.",
        },
        {
          img: "/img/rewiews/4.jpg",
          title: "Анна Авакова",
          description: "Подошли к вопросу очень внимательно",
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
  .reviews__slider-person {
    display: block;
    width: 100px;
    height: 100px;
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