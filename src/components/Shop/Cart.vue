<template>
  <div class="cart">
    <div class="wrapper">
      <h4 class="cart__title">Корзина</h4>
      <div class="cart__content">
        <CartItem
          v-for="(item, index) in cart_data"
          :key="item.article"
          :cart_item="item"
          @delete="deleteCartItem(index)"
          @increment="increment(index)"
          @decrement="decrement(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem";
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "Cart",
  data() {
    return {
      cart_data: []
    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ]),
  },
  components: {
    CartItem
  },
  methods: {
    ...mapActions([
      'DELETE_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM',
    ]),

    deleteCartItem(index) {
      this.DELETE_CART(index);
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    }
  },
  mounted() {
    this.cart_data = this.CART;
  }
};
</script>

<style lang="scss">
</style>