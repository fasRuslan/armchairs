<template>
  <section class="product-detail">
    <div class="wrapper">
      <h2 class="product-detail__title">Name</h2>
      <div
        class="product-detail__content d-flex justify-content-between align-items-start"
      >
        <div class="product-detail__content-img">
          <img src="/img/shop/catalogitem/1.png" alt="" />
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
            В корзину
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductDetail",
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