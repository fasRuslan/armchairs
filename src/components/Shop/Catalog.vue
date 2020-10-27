<template>
  <div class="catalog">
    <h1 class="catalog__title">Каталог</h1>
    <div class="catalog__list">
      <catalogItem
        v-for="product in products"
        :key="product.article"
        :product="product"
      />
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
          image: "1.jpg",
          name: "Сенатор",
          price: 5.35,
          article: "T1",
          available: true,
          category: "Сентор",
        },
        {
          image: "2.jpg",
          name: "Сенатор",
          price: 5.35,
          article: "T1",
          available: true,
          category: "Сентор",
        },
        {
          image: "3.jpg",
          name: "Сенатор",
          price: 5.35,
          article: "T1",
          available: true,
          category: "Сентор",
        },
        {
          image: "4.jpg",
          name: "Менеджер",
          price: 5.35,
          article: "T1",
          available: true,
          category: "Менеджер",
        },
        {
          image: "5.jpg",
          name: "Менеджер",
          price: 5.35,
          article: "T1",
          available: true,
          category: "Менеджер",
        },
        {
          image: "6.jpg",
          name: "Менеджер",
          price: 5.35,
          article: "T1",
          available: true,
          category: "Менеджер",
        },
        {
          image: "7.jpg",
          name: "Ральф",
          price: 5.35,
          article: "T1",
          available: true,
          category: "Ральф",
        },
        {
          image: "8.jpg",
          name: "Ральф",
          price: 5.35,
          article: "T1",
          available: true,
          category: "Ральф",
        },
        {
          image: "9.jpg",
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