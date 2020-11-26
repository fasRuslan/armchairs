<template>
  <section class="product-detail">
    <div class="wrapper" v-for="product in products" :key="product.article">
      <h2 class="product-detail__title">{{ product.name }}</h2>
      <div
          class="product-detail__content d-flex justify-content-between align-items-start"
      >
        <div
            class="product-detail__content-img d-flex flex-column justify-content-between align-items-center"
            v-if="product.colors.length"
        >
          <b-carousel
              id="carousel"
              ref="carousel"
              v-model="activeSlide"
              :interval="4000"
              controls>
            <b-carousel-slide
                v-for="(item, index) in product.colors"
                :key="index"
                :img-src="'/img/shop/catalogitem/' + item.img"
                class="img-fluid"
            ></b-carousel-slide>
          </b-carousel>
          <div class="colors">
            <div class="colors__slider-dots">
              <span class="colors__slider-dot"
                    v-for="(color, index) in product.colors"
                    :key="index"
                    @click="slideGo(index, product)"
                    :class="{'colors__slider-dot--active' : index === activeSlide }"
                    :style="{ 'background-color': color.number }"
              >
              </span>
            </div>
          </div>
          <input type="hidden" v-model="currentColor">
          <button
              class="product-detail__content-text__button"
              @click="addCart(product, currentColor)"
          >
            Добавить в корзину
          </button>
        </div>
        <div class="product-detail__content-text">
          <h3 class="product-detail__content-text__title">Описание товара</h3>
          <div class="product-detail__content-text__description">
            {{ product.description }}
          </div>
          <table class="table table-striped">
            <thead>
            <tr>
              <th>Характеристики</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">Соединительный узел:</th>
              <td>{{ product.specifications.connectorAssembly }}</td>
            </tr>
            <tr>
              <th scope="row">Максимальная нагрузка :</th>
              <td>{{ product.specifications.maximumLoad }}</td>
            </tr>
            <tr>
              <th scope="row">Ширина кресла :</th>
              <td>{{ product.specifications.widthChair }}</td>
            </tr>
            <tr>
              <th scope="row">Глубина кресла :</th>
              <td>{{ product.specifications.depthChair }}</td>
            </tr>
            <tr>
              <th scope="row">Высота поднятого кресла :</th>
              <td>{{ product.specifications.heightRaisedChair }}</td>
            </tr>
            <tr>
              <th scope="row">Высота опущенного кресла :</th>
              <td>{{ product.specifications.heightLoweredChair }}</td>
            </tr>
            <tr>
              <th scope="row">Ширина сиденья :</th>
              <td>{{ product.specifications.seatWidth }}</td>
            </tr>
            <tr>
              <th scope="row">Высота поднятого сиденья :</th>
              <td>{{ product.specifications.heightRaisedSeat }}</td>
            </tr>
            <tr>
              <th scope="row">Высота опущенного сиденья :</th>
              <td>{{ product.specifications.loweredSeatHeight }}</td>
            </tr>
            <tr>
              <th scope="row">Высота спинки</th>
              <td>{{ product.specifications.backHeight }}</td>
            </tr>
            <tr>
              <th scope="row">Материал обивки :</th>
              <td>{{ product.specifications.upholsteryMaterial }}</td>
            </tr>
            <tr>
              <th scope="row">Подголовник :</th>
              <td>{{ product.specifications.headrest }}</td>
            </tr>
            <tr>
              <th scope="row">Тип роликов :</th>
              <td>{{ product.specifications.typeOfVideos }}</td>
            </tr>
            <tr>
              <th scope="row">Подлокотники :</th>
              <td>{{ product.specifications.armrests }}</td>
            </tr>
            <tr>
              <th scope="row">Механизм качания :</th>
              <td>{{ product.specifications.tiltingMechanism }}</td>
            </tr>
            <tr>
              <th scope="row">Тип механизма качания :</th>
              <td>{{ product.specifications.typeTiltingMechanism }}</td>
            </tr>
            <tr>
              <th scope="row">Соединительный узел:</th>
              <td>{{ product.specifications.connectorAssembly }}</td>
            </tr>
            <tr>
              <th scope="row">Регулировка высоты сиденья :</th>
              <td>{{ product.specifications.seatHeightAdjusment }}</td>
            </tr>
            <tr>
              <th scope="row">Соединительный узел:</th>
              <td>{{ product.specifications.connectorAssembly }}</td>
            </tr>
            <tr>
              <th scope="row">Поясничный упор :</th>
              <td>{{ product.specifications.lumbarSupport }}</td>
            </tr>
            <tr>
              <th scope="row">Гарантия производителя :</th>
              <td>{{ product.specifications.guarantee }}</td>
            </tr>
            <tr>
              <th scope="row">Материал каркаса :</th>
              <td>{{ product.specifications.material }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductDetail",
  data() {
    return {
      products: [],
      activeSlide: 0,
      currentColor: ''
    }
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS", "ADD_TO_CART"]),
    addCart(product, color) {
      this.ADD_TO_CART({product, color});
    },
    slideGo: function(index) {
      this.activeSlide = index;
      this.$refs.carousel.setSlide(index)
    },
    choiseColor: function () {
      this.currentColor = this.products[0].colors[this.activeSlide].name;
    }
  },
  created() {
    let self = this;
    this.GET_PRODUCTS().then((response) => {
      if (response.data) {
        this.products = [...this.PRODUCTS];
        this.products = this.products.filter(function (item) {
          return item.link == self.$route.params.link;
        });
      }
      this.currentColor = this.products[0].colors[this.activeSlide].name;
    });
  },
  watch: {
    activeSlide() {
      this.choiseColor();
    }
  }
};
</script>

<style lang="scss">
.product-detail {
  padding: 60px 2%;

  &__title {
  }

  &__content {
  }

  &__content-img {
    max-width: 30%;
    & > img {
      margin-bottom: 50px;
    }
  }

  &__content-text {
    max-width: 50%;
    &__title {
      margin-bottom: 20px;
    }
    &__description {
      margin-bottom: 50px;
    }
    &__button {
    }
  }
  .colors {
    margin: 20px auto;

    &__slider-dot {
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-right: 10px;
      border: 2px solid transparent;
      cursor: pointer;

      &--active {
        border-color: #000;
      }
    }
  }

  .carousel-control-prev-icon, .carousel-control-next-icon {
    width: 30px;
    height: 30px;
    background-color: #FFF501;
    background-size: 15px;
  }
}
</style>