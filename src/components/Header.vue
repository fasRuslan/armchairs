<template>
  <section class="header">
    <div class="logo">
      <img src="" alt="" />
    </div>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item" v-for="(item, index) in menu" :key="index">
          <a href="#" class="nav__item-link">{{ item.link }}</a>
        </li>
      </ul>
    </nav>
    <div class="tel"></div>
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
}
</style>