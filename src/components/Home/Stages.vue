<template>
  <section class="stages">
    <div class="wrapper">
      <h2 class="stages__title">Как сделать заказ</h2>
      <ul
        class="stages__list d-flex justify-content-between align-items-center flex-wrap"
      >
        <li
          class="stages__item col-5 d-flex justify-content-between align-items-center"
          v-for="(stagesItem, index) in stagesList"
          :key="index"
        >
          <img v-bind:src="stagesItem.img" alt="" />
          <p class="stage__item-title">{{ stagesItem.title }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Stages",
  data() {
    return {
      stagesList: [
        {
          img: "/img/stages/01.svg",
          title:
            "Оставьте заявку на нашем сайте или позвоните по горячей линии +7 (999) 999-99-99",
        },
        {
          img: "/img/stages/02.svg",
          title: "Менеджер связывается с Вами для уточнения деталей",
        },
        {
          img: "/img/stages/03.svg",
          title:
            "Мы доставим Ваш заказ по Москве - 1 день, по России - от 3 до 7 дней",
        },
        {
          img: "/img/stages/04.svg",
          title: "Вы получаете и оплачиваете Ваш заказ",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.stages {
  padding: 60px 2%;
  background-image: url(/img/stages/fone.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  &__title {
  }

  &__list {
  }

  &__item {
    margin-bottom: 40px;
  }
  .stage__item-title {
    margin-left: 15px;
    color: #363636;
    font-size: 20px;
  }
}
</style>