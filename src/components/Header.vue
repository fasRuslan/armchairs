<template>
  <section class="header">
    <div class="wrapper d-flex justify-content-between">
      <div class="logo">logo</div>
      <nav class="nav">
        <ul class="nav__list d-flex justify-content-between align-items-center">
          <li class="nav__item" v-for="(item, index) in menu" :key="index">
            <a href="#" class="nav__item-link">{{ item.link }}</a>
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
        },
        {
          link: "Отзывы",
          anchors: "",
        },
        {
          link: "Контакты",
          anchors: "",
        },
      ],
    };
  },
  methods: {},
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