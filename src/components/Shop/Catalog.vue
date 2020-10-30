<template>
  <div class="catalog">
    <div class="wrapper">
      <h1 class="catalog__title">Каталог</h1>
      <div
        class="catalog__list d-flex justify-content-between align-items-center flex-wrap"
      >
        <catalogItem
          v-for="product in products"
          :key="product.article"
          :product="product"
          @sendarticle="addToCart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import catalogItem from "./CatalogItem";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Catalog",
  components: {
    catalogItem,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  created() {
    this.GET_PRODUCTS().then((response) => {
      if (response.data) {
        this.products = [...this.PRODUCTS];
      }
    });
  },
};
</script>

<style lang="scss">
.catalog {
  &__title {
    margin-bottom: 50px;
  }
}
</style>