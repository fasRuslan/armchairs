<template>
  <div class="cart-item">
    <div class="wrapper">
      <h2 class="cart__item-title">{{ cart_item.name }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartItem",
  props: {
    cart_item: {
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