<template>
  <div class="cart-item">
    <div class="wrapper">
      <div class="cart-item cart__table-row">
        <div class="cart__table-td">
          <button class="cart-item__del btn" @click="deleteCartItem">
            ✕
          </button>
          <div class="cart-item__img">
            <img :src="'img/shop/catalogitem/' + cart_item.image">
          </div>
          <div class="cart-item__title">
            {{cart_item.name}}
          </div>
        </div>
        <div class="cart__table-td">
          <div class="cart-item__price">
            <span>
              {{cart_item.price}} ₽
            </span>
          </div>
        </div>
        <div class="cart__table-td">
          <div class="cart-item__quantity">
            <span class="cart-item__qty-btn" @click="decrement">-</span>
            <span class="cart-item__qty">{{cart_item.quantity}}</span>
            <span class="cart-item__qty-btn" @click="increment">+</span>
          </div>
        </div>
        <div class="cart__table-td">
          <div class="cart-item__subtotal">
            {{cart_item.price * cart_item.quantity}} ₽
          </div>
        </div>
      </div>
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
  methods: {
    deleteCartItem () {
      this.$emit('delete');
    },
    decrement() {
      this.$emit('decrement')
    },
    increment() {
      this.$emit('increment')
    }
  }
};
</script>

<style lang="scss">
</style>