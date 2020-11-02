<template>
  <section class="header">
    <div class="wrapper d-flex justify-content-between align-items-center">
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
            <router-link
              :to="{ path: '/', hash: '#about' }"
              class="nav__item-link"
            >
              О компании
            </router-link>
          </li>
          <li class="nav__item">
            <router-link
              :to="{ path: '/', hash: '#reviews' }"
              class="nav__item-link"
            >
              Отзывы
            </router-link>
          </li>
          <li class="nav__item">
            <router-link
              class="nav__item__cart-link"
              :to="{ name: 'Cart', params: { cart_data: CART } }"
            >
              <div class="catalog__cart">
                <div class="catalog__cart-icon">
                  <img src="/img/ic-cart.svg" width="40" />
                </div>
                <span class="catalog__cart-count">
                  {{ CART.reduce((s, i) => (s = s + i.quantity), 0) }}
                </span>
              </div>
            </router-link>
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
    margin-bottom: 0;
  }
  .nav__item {
    position: relative;

    &-link {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .catalog__cart {
    position: relative;
    &-count {
      position: absolute;
      bottom: 0;
      right: -10px;
    }
  }
  .nav__item-link {
  }
  .tel {
    width: 15%;
    text-align: center;
    margin-left: 50px;
  }
  .tel__link {
    color: black;
  }
}
</style>