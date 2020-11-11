<template>
  <section class="product-detail">
    <div class="wrapper" v-for="product in products" :key="product.article">
      <h2 class="product-detail__title">{{ product.name }}</h2>
      <div
        class="product-detail__content d-flex justify-content-between align-items-start"
      >
        <div class="product-detail__content-img">
          <img :src="'/img/shop/catalogitem/' + product.image" alt="" />
        </div>
        <div class="product-detail__content-text">
          <h3 class="product-detail__content-text__title">Описание товара</h3>
          <div class="product-detail__content-text__description">
            {{ product.description }}
          </div>
          <h3 class="product-detail__content-text__title">
            Характеристики товара
          </h3>
          <div class="product-detail__content-text__description">
            <p>
              Соединительный узел:{{ product.specifications.connectorAssembly }}
            </p>
            <p>
              Максимальная нагрузка :{{ product.specifications.maximumLoad }}
            </p>
            <p>Ширина кресла :{{ product.specifications.widthChair }}</p>
            <p>Глубина кресла :{{ product.specifications.depthChair }}</p>
            <p>
              Высота поднятого кресла :{{
                product.specifications.heightRaisedChair
              }}
            </p>
            <p>
              Высота опущенного кресла :{{
                product.specifications.heightLoweredChair
              }}
            </p>
            <p>Ширина сиденья :{{ product.specifications.seatWidth }}</p>
            <p>Глубина сиденья :{{ product.specifications.seatDeth }}</p>
            <p>
              Высота поднятого сиденья :{{
                product.specifications.heightRaisedSeat
              }}
            </p>
            <p>
              Высота опущенного сиденья :{{
                product.specifications.loweredSeatHeight
              }}
            </p>
            <p>Высота спинки :{{ product.specifications.backHeight }}</p>
            <p>
              Материал обивки :{{ product.specifications.upholsteryMaterial }}
            </p>
            <p>Подголовник :{{ product.specifications.headrest }}</p>
            <p>Тип роликов :{{ product.specifications.typeOfVideos }}</p>
            <p>Подлокотники :{{ product.specifications.armrests }}</p>
            <p>
              Механизм качания :{{ product.specifications.tiltingMechanism }}
            </p>
            <p>
              Тип механизма качания :{{
                product.specifications.typeTiltingMechanism
              }}
            </p>
            <p>
              Регулировка высоты сиденья :{{
                product.specifications.seatHeightAdjusment
              }}
            </p>
            <p>Поясничный упор :{{ product.specifications.lumbarSupport }}</p>
            <p>
              Гарантия производителя :{{ product.specifications.guarantee }}
            </p>
            <p>Материал каркаса :{{ product.specifications.material }}</p>
          </div>
          <button
            class="product-detail__content-text__button"
            @click="addCart(product)"
          >
            Добавить в корзину
          </button>
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
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["ADD_CART", "GET_PRODUCTS", "ADD_TO_CART"]),
    addCart(product) {
      console.log(product);
      this.ADD_TO_CART(product);
    },
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
    });
  },
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
}
</style>