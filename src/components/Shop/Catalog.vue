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
          @sendarticle="showChildArticleInConsole"
        />
      </div>
    </div>
  </div>
</template>

<script>
import catalogItem from "./CatalogItem";

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
  computed: {},
  methods: {
    ...mapAction(["GET_PRODUCTS_FROM_API"]),
    showChildArticleInConsole(data) {
      console.log(data);
    },
  },
  created() {
    this.GET_PRODUCTS_FROM_API;
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