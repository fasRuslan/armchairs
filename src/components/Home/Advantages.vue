<template>
  <section class="advantages">
    <div class="wrapper">
      <h2 class="advantages__title">Почему выбирают нас?</h2>
      <div class="advantages__list">
        <div
          class="advantages__item"
          :class="'advantages__item-' + index"
          v-for="(advantage, index) in advantagesList"
          :key="index"
        >
          <h3 class="advantages__item-title">{{ advantage.title }}</h3>
          <p class="advantages__item-subtitle">{{ advantage.subtitle }}</p>
        </div>
        <img :src="advantagesPicture" alt="" class="advantages__picture" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      advantagesList: [
        {
          title: "ДОГЛОВЕЧНОСТЬ",
          subtitle:
            "Мы используем первоклассную экокожу максимально повышенной плотности. Наш материал обладает высокой устойчивостью к истиранию - более 50 000 циклов, что на 40% выше более дешевых аналогов. ",
        },
        {
          title: "ПРАКТИЧНОСТЬ",
          subtitle:
            "Безопасный гипоаллергенный материал, обладает высокой устойчивостью к многократному изгибу (более 200 000 циклов), к истираемости и сопротивляемостью к царапинам.",
        },
        {
          title: "ВНИМАНИЕ К МЕЛОЧАМ",
          subtitle:
            "При производстве комплектующих мы используем не обычное напыление, а гальваническое покрытие, что обеспечивает сохранность эстетического вида на долгие годы.",
        },
        {
          title: "МАКСИМАЛЬНЫЙ КОМФОРТ",
          subtitle:
            "Полиуретановое покрытие является основным фактором мягкости и сверхпрочности, а также делает Ваше кресло прятным на ощупь и лёгким в эксплуатации и уходе",
        },
      ],
      advantagesPicture: "/img/advantages/armchair.png",
    };
  },
};
</script>


<style lang="scss">
.advantages {
  padding: 60px 2%;
  &__title {
  }

  &__list {
    position: relative;
    min-height: 750px;
  }

  &__item {
    position: absolute;
    max-width: 500px;
    width: 100%;
    z-index: 2;
    &::before {
      content: "";
      position: absolute;
      top: 50px;
      width: 100%;
      background-color: #858585;
      height: 1px;
    }
    &::after {
      content: "";
      top: 40px;
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #858585;
    }
    &-0 {
      top: 4%;
      left: 5%;
      text-align: left;
      &::before {
        left: 0;
      }
      &::after {
        right: 0;
      }
    }
    &-1 {
      left: 0;
      bottom: 30%;
      text-align: left;
      &::before {
        right: 0;
      }
      &::after {
        right: 0;
      }
    }
    &-2 {
      right: 0%;
      top: 0%;
      text-align: right;
      &::before {
        right: 0;
      }
      &::after {
        left: 0;
      }
      .advantages__item-subtitle {
        margin-left: auto;
        margin-right: 0;
      }
    }
    &-3 {
      right: 0;
      bottom: 35%;
      text-align: right;
      &::before {
        right: 0;
      }
      &::after {
        left: 0;
      }
      .advantages__item-subtitle {
        margin-left: auto;
        margin-right: 0;
      }
    }
  }

  &__item-title {
    font-size: 20px;
  }

  &__item-subtitle {
    font-size: 16px;
    color: #6d6d6d;
    max-width: 400px;
  }

  &__picture {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
}
</style>