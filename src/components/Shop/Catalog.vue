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
      products: [
        {
          image: "1.png",
          name: "Сенатор",
          price: 5.35,
          article: "T1",
          available: true,
          category: "Сенатор",
        },
        {
          image: "2.png",
          name: "Сенатор",
          price: 5.35,
          article: "T1",
          available: true,
          category: "Сентор",
        },
        {
          image: "3.png",
          name: "Сенатор",
          price: 5.35,
          article: "T1",
          available: true,
          category: "Сентор",
        },
        {
          image: "4.png",
          name: "Менеджер",
          price: 5.35,
          article: "T1",
          available: true,
          category: "Менеджер",
        },
        {
          image: "5.png",
          name: "Менеджер",
          price: 5.35,
          article: "T1",
          available: true,
          category: "Менеджер",
        },
        {
          image: "6.png",
          name: "Менеджер",
          price: 5.35,
          article: "T1",
          available: true,
          category: "Менеджер",
        },
        {
          image: "7.png",
          name: "Ральф",
          price: 5.35,
          article: "T1",
          available: true,
          category: "Ральф",
        },
        {
          image: "8.png",
          name: "Ральф",
          price: 5.35,
          article: "T1",
          available: true,
          category: "Ральф",
        },
        {
          image: "9.png",
          name: "Ральф",
          price: 5.35,
          article: "T1",
          available: true,
          category: "Ральф",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>