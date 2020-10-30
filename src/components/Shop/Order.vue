<template>
  <section class="order">
    <div class="container" v-if="cart_data.length">
      <div class="row">
        <div class="col-sm-12">
          <h1 class="title">
            Оформление заказа
          </h1>
        </div>
        <div class="col-sm-12">
          <div class="error" v-if="validation.hasError() === true">Проверьте правильность заполнения полей!</div>
          <form class="order__form" @submit.prevent="submit">
            <h3 class="order__form-title">
              Ваш заказ
            </h3>
            <div class="form-group">
              <div class="order__items"
                   v-for="(item, index) in cart_data"
                   :key="index">
                <div class="order__item">
                  <div class="order__item-title">
                    "{{item.name}}"
                  </div>
                  <div>
                    Кол-во: {{item.quantity}} шт.
                  </div>
                  <span v-if="item.isSale">
                                        Сумма: {{item.priceSale * item.quantity}} ₽
                                    </span>
                  <span v-else>
                                        Сумма: {{item.price * item.quantity}} ₽
                                    </span>
                </div>
              </div>
            </div>
            <h3 class="order__form-title">
              Контактная информация
            </h3>
            <div class="form-group">
              <div class="form-row">
                <input class="form-control" type="text" placeholder="Имя" v-model="name" name="name">
                <div class="message">{{ validation.firstError('name') }}</div>
              </div>
              <div class="form-row">
                <input class="form-control" type="tel" placeholder="+7 (___) ___-__-__" v-model="phone" v-mask="'+7 (###) ###-##-##'" name="phone">
                <div class="message">{{ validation.firstError('phone') }}</div>
              </div>
              <div class="form-row">
                <input class="form-control" type="email" placeholder="Email" v-model="email" name="email">
                <div class="message">{{ validation.firstError('email') }}</div>
              </div>
            </div>
            <h3 class="order__form-title">
              Доставка
            </h3>
            <div class="form-group">
              <div class="form-row">
                <input type="text" placeholder="Индекс" class="form-control" v-model="ind" v-mask="'######'" name="ind">
                <div class="message">{{ validation.firstError('ind') }}</div>
              </div>
              <div class="form-row">
                <input type="text" placeholder="Город" class="form-control" v-model="city" name="city">
                <div class="message">{{ validation.firstError('city') }}</div>
              </div>
              <div class="form-row">
                <input type="text" placeholder="Улица, дом, квартира" class="form-control" v-model="address" name="address">
                <div class="message">{{ validation.firstError('address') }}</div>
              </div>
            </div>
            <div class="order__total">
              <h3 class="order__form-title">
                Итого к оплате: {{cartTotal}} ₽
              </h3>
              <input type="hidden" :value="cartTotal" name="total">
            </div>
            <div class="form-group">
              <button class="btn" type="submit">
                Оформить заказ
              </button>
            </div>
          </form>
          <div>
            {{message}}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import SimpleVueValidator from 'simple-vue-validator';
  const Validator = SimpleVueValidator.Validator;
  import axios from "axios";

  export default {
    name: "Order",
    mixins: [SimpleVueValidator.mixin],
    data() {
      return {
        cart_data: [],
        name: '',
        phone: '',
        email: '',
        ind: '',
        city: '',
        address: '',
        message: '',
      }
    },
    validators: {
      name: function(value) {
        return Validator.value(value).required('Поле обязательно для заполнения').minLength(5, 'Введите не менее 5 символов');
      },
      phone: function(value) {
        return Validator.value(value).required('Поле обязательно для заполнения').length(18, 'Поле телефон должно содержать 10 цифр');
      },
      email: function(value) {
        return Validator.value(value).required('Поле обязательно для заполнения').email('Некорректный email');
      },
      ind: function(value) {
        return Validator.value(value).required('Поле обязательно для заполнения').length(6, 'Введите корректный индекс').digit('Только цифры');
      },
      city: function(value) {
        return Validator.value(value).required('Поле обязательно для заполнения');
      },
      address: function(value) {
        return Validator.value(value).required('Поле обязательно для заполнения');
      },
    },
    computed: {
      ...mapGetters([
        'CART'
      ]),
      cartTotal() {
        let result = [];
        let price;

        if (this.cart_data.length) {
          for (let item of this.cart_data) {
            if (item.priceSale) {
              price = item.priceSale
            }
            else {
              price = item.price
            }
            result.push(price * item.quantity)
          }

          result = result.reduce(function (sum, el) {
            return sum + el;
          });

          return result
        }
        else {
          return 0
        }
      }
    },
    methods: {
      ...mapActions([
        'CLEAR_CART',
      ]),
      mail: function() {
        let self = this;
        axios({
          method: 'post',
          url: 'mail.php',
          data: {
            name: self.name,
            phone: self.phone,
            email: self.email,
            ind: self.ind,
            city: self.city,
            address: self.address,
            cart: self.cart_data,
            cartTotal: self.cartTotal
          },
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then(function (response) {
          self.message = response.data;
          self.name = '';
          self.phone = '';
          self.email = '';
          self.ind = '';
          self.city = '';
          self.address = '';
          self.cart_data = [];
          self.CLEAR_CART();
        });
      },
      submit: function() {
        let self = this;
        this.$validate()
                .then(function(success) {
                  if (success) {
                    self.mail();
                  }
                });
      },
    },
    mounted() {
      this.cart_data = this.CART;
    }
  }
</script>

<style lang="scss">
  .order {

  }
</style>