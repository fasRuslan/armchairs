<template>
  <div class="catalogItem">
    <h4 class="catalog-item__name">{{ product.name }}</h4>
    <p class="catalog-item__price">Цена:{{ product.price }}</p>
    <button class="catalog-item__add-to-card-button">Добавить в корзину</button>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss">
</style>