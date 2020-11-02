<template>
  <div class="cart">
    <div class="wrapper">
      <h1 class="cart__title">Корзина</h1>
      <template v-if="!cart_data.length">
        <h2>Ваша корзина пуста</h2>
        <router-link
                :to="{name: 'Catalog'}">
          Перейти в каталог
        </router-link>
      </template>
      <div v-else class="cart__content">
        <div class="wrapper">
          <table class="table table-striped table-bordered table-hover">
            <thead class="thead-dark">
              <tr>
                <th>
                  Товар
                </th>
                <th>
                  Наименование
                </th>
                <th>
                  Цена
                </th>
                <th>
                  Количество
                </th>
                <th>
                  Сумма
                </th>
              </tr>
            </thead>
            <tbody>
              <CartItem
                      v-for="(item, index) in cart_data"
                      :key="item.article"
                      :cart_item="item"
                      @delete="deleteCartItem(index)"
                      @increment="increment(index)"
                      @decrement="decrement(index)"
              />
            </tbody>
          </table>
        </div>
        <router-link
                class="btn btn--order"
                :to="{ name: 'Order' }"
        >
          Оформить заказ
        </router-link>
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
  .table {
    margin: 40px 0;
  }
  .btn--order {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    background-color: #FFF501;
    padding: 10px 20px;
    cursor: pointer;
  }
</style>