<template>
  <div
    class="catalog-item d-flex flex-column justify-content-between align-items-center"
  >
    <img
      class="catalog-item__picture"
      :src="'img/shop/catalogitem/' + product.image"
      alt=""
    />
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
.catalog-item {
  max-width: 30%;
  margin-bottom: 60px;
  height: 500px;
  &__name {
    font-size: 20px;
    font-weight: normal;
    color: black;
  }

  &__price {
    font-size: 22px;
    color: red;
    font-weight: bold;
    margin-bottom: 10px;
  }

  &__add-to-card-button {
  }
  &__picture {
    width: 80%;
    margin-bottom: 30px;
  }
}
</style>