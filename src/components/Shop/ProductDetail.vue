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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            quia tempore laudantium alias repellat in totam possimus dolore
            fugiat officiis recusandae officia, tenetur, amet ab a! Rem non et
            magni!
          </div>
          <button class="product-detail__content-text__button">
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
    ...mapActions(["GET_PRODUCTS"]),
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