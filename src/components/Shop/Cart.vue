<template>
  <div class="cart">
    <div class="wrapper">
      <h4 class="cart__title">Корзина</h4>
      <div class="cart__content">
        <CartItem
          :cart_item="item"
          v-for="item in cart_data"
          :key="item.article"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem";
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  data() {
    return {
      cart_data: [],
    };
  },
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  // methods: {
  // ...mapActions(["GET_PRODUCTS", "ADD_TO_CART"]),
  //   addToCart(data) {
  //     this.ADD_TO_CART(data);
  //   },
  // },
  mounted() {
    this.cart_data = this.CART;
  },
};
</script>

<style lang="scss">
</style>