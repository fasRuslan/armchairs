<template>
  <section class="product-detail">
    <div class="wrapper" v-for="product in products" :key="product.article">
      <h2 class="product-detail__title">{{ product.name }}</h2>
      <div
        class="product-detail__content d-flex justify-content-between align-items-start"
      >
        <div
          class="product-detail__content-img d-flex flex-column justify-content-between align-items-center"
        >
          <VueAgile :options="myOptions" v-if="product.gallery.length > 0">
            <img
              v-for="(item, index) in product.gallery"
              :key="index"
              :src="'/img/shop/catalogitem/' + item"
              alt=""
            />
          </VueAgile>
          <div v-for="(color, ind) in product.colors" :key="ind">
            <label
              :for="color.engName"
              :style="{ 'background-color': color.number }"
            ></label>
            <input
              type="radio"
              :id="color.engName"
              :value="color.name"
              name="colors"
            />
          </div>
          <button
            class="product-detail__content-text__button"
            @click="addCart(product)"
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
import { VueAgile } from "vue-agile";

export default {
  name: "ProductDetail",
  components: { VueAgile },
  data() {
    return {
      products: [],
      myOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        navButtons: true,
        dots: true,
      },
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
}
</style>