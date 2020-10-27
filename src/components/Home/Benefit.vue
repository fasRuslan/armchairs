<template>
  <section class="benefit">
    <div class="wrapper">
      <ul class="benefit__list">
        <li
          class="benefit__item"
          v-for="(item, index) in benefitList"
          :key="index"
        >
          <img :src="item.img" class="benefit__item-icon" />
          <p class="benefit__item-title">{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      benefitList: [
        {
          img: "/img/benefit/1.svg",
          title: "Быстрая доставка по Москве",
        },
        {
          img: "/img/benefit/2.svg",
          title: "Выставочный зал, можете приехать и выбрать",
        },
        {
          img: "/img/benefit/3.svg",
          title: "Гарантия на весь каталог продукции",
        },
        {
          img: "/img/benefit/4.svg",
          title: "Собственное производство - лучшая цена",
        },
      ],
    };
  },
};
</script>


<style lang="scss">
.benefit {
  padding: 60px 2%;
  background-color: #232323;
  color: white;
  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__item {
    width: 20%;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  &__item-icon {
    margin-bottom: 10px;
  }

  &__item-title {
  }
}
</style>