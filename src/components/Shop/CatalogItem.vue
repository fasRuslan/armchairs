<template>
  <div
    class="catalog-item d-flex flex-column justify-content-around align-items-center text-center"
  >
    <router-link
      :to="{ name: 'ProductDetail', params: { link: product.link } }"
    >
      <div class="catalog-item__picture-box">
        <img
          class="catalog-item__picture"
          :src="'img/shop/catalogitem/' + product.image"
          alt=""
        />
      </div>

      <h4 class="catalog-item__name">{{ product.name }}</h4>
      <p class="catalog-item__price">Цена: {{ product.price }}р.</p>
    </router-link>
    <button class="catalog-item__add-to-card-button" @click="sendDataToParent(product, color)">
      Добавить в корзину
    </button>
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
  data() {
    return {
      color: 'Цвет не выбран'
    };
  },
  methods: {
    sendDataToParent(product, color) {
      this.$emit("sendarticle", product, color);
    },
  },
};
</script>

<style lang="scss">
.catalog-item {
  padding: 20px 20px;
  max-width: 30%;
  margin-bottom: 60px;
  height: 500px;
  border: 1px solid #aeaeae;
  border-radius: 20px;
  &__name {
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 20px;
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
  &____picture-box {
    width: 100%;
    text-align: center;
  }
  &__picture {
    width: 70%;
    object-fit: cover;
    display: block;
    margin: 0 auto;
    margin-bottom: 30px;
  }
}
</style>