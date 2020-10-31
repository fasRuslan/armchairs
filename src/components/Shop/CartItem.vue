<template>
      <tr class="cart-item cart__table-row">
        <td class="cart__table-td">
          <button class="cart-item__del btn" @click="deleteCartItem">
            ✕
          </button>
          <div class="cart-item__img">
            <img :src="'img/shop/catalogitem/' + cart_item.image" width="100">
          </div>
        </td>
        <td class="cart__table-td">
          <div class="cart-item__title">
            {{cart_item.name}}
          </div>
        </td>
        <td class="cart__table-td">
          <div class="cart-item__price">
            <span>
              {{cart_item.price}} ₽
            </span>
          </div>
        </td>
        <td class="cart__table-td">
          <div class="cart-item__quantity">
            <button class="btn cart-item__qty-btn" @click="decrement">-</button>
            <span class="cart-item__qty">{{cart_item.quantity}}</span>
            <button class="btn cart-item__qty-btn" @click="increment">+</button>
          </div>
        </td>
        <td class="cart__table-td">
          <div class="cart-item__subtotal">
            {{cart_item.price * cart_item.quantity}} ₽
          </div>
        </td>
      </tr>
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
  .cart-item__quantity {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 18px;
      margin: 0 10px;
    }
  }
</style>