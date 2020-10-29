<template>
  <div class="cart">
    <div class="wrapper">
      <h4 class="cart__title">Корзина</h4>
      <div class="cart__content">
        <CartItem />
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem";

export default {
  name: "Cart",
  components: {
    CartItem,
  },
};
</script>

<style lang="scss">
</style>