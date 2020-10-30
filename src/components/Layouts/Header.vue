<template>
  <section class="header">
    <div class="wrapper d-flex justify-content-between">
      <div class="logo">logo</div>
      <nav class="nav">
        <ul class="nav__list d-flex justify-content-between align-items-center">
          <li class="nav__item">
            <router-link :to="{ name: 'Home' }" class="nav__item-link">
              Главная
            </router-link>
          </li>
          <li class="nav__item">
            <router-link :to="{ name: 'Catalog' }" class="nav__item-link">
              Каталог
            </router-link>
          </li>
          <li class="nav__item">
            <a class="nav__item-link">О компании</a>
          </li>
          <li class="nav__item">
            <a class="nav__item-link">Отзывы</a>
          </li>
          <li class="nav__item">
            <a class="nav__item-link">
              <router-link class="main-header__cart-link"
                           :to="{name: 'Cart', params: {cart_data: CART}}">
                <div class="catalog__cart">
                  <div class="catalog__cart-icon">
                    <img src="/img/ic-cart.svg" width="40">
                  </div>
                  <span class="catalog__cart-count">
                    {{CART.reduce((s, i) => s = s + i.quantity, 0)}}
                  </span>
                </div>
              </router-link>
            </a>
          </li>
        </ul>
      </nav>
      <div class="tel">
        <a href="tel:+79999999999" class="tel__link">+7(999)9999999</a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      menu: [
        {
          link: "Главная",
          anchors: "",
        },
        {
          link: "Каталог",
          anchors: "",
        },
        {
          link: "О компании",
          anchors: "",
          href: "",
        },
        {
          link: "Отзывы",
          anchors: "",
          href: "",
        },
        {
          link: "Контакты",
          anchors: "",
          href: "",
        },
      ],
    };
  },
  methods: {},
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>


<style lang="scss">
.header {
  padding: 60px 2%;
  .header__flex {
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    width: 15%;
    text-align: center;
  }
  .nav {
    width: 65%;
  }
  .nav__list {
    width: 100%;
  }
  .nav__item {
  }
  .nav__item-link {
  }
  .tel {
    width: 15%;
    text-align: center;
  }
  .tel__link {
    color: black;
  }
}
</style>