<template>
  <section class="services" id="services">
    <div class="wrapper">
      <h2 class="services__title text-center">
        Каталог продукции офисных кресел
      </h2>
      <p class="services__subtitle text-center">
        В наличии более 300 различных цветов. Узнавайте подробности у менеджеров
      </p>
      <ul
        class="services__list d-flex justify-content-between align-items-center"
      >
        <li
          class="services__item"
          v-for="(serviceItem, index) in services__list"
          :key="index"
        >
          <a href="#" class="services__item-link text-center">
            <router-link
              :to="{ name: 'Catalog' }"
              class="service__item-link-button"
            >
              <img
                class="service__item-link-img"
                v-bind:src="serviceItem.img"
                alt=""
              />
              <p class="service__item-link-title">{{ serviceItem.title }}</p>
              <p class="service__item-link-price">{{ serviceItem.price }}</p>
              <button class="">{{ serviceItem.button }}</button>
            </router-link>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      services__list: [
        {
          img: "/img/service/nadir.jpeg",
          title: "Надир",
          price: "16 000 руб.",
          button: "Перейти в каталог",
        },
        {
          img: "/img/service/atlant1.jpeg",
          title: "Атлант",
          price: "15 900 руб",
          button: "Перейти в каталог",
        },
        {
          img: "/img/service/patrick1.jpeg",
          title: "Patrick",
          price: "16 950 руб",
          button: "Перейти в каталог",
        },
      ],
    };
  },
};
</script>


<style lang="scss">
.services {
  &__title {
  }

  &__subtitle {
  }

  &__list {
  }

  &__item {
  }
  .service__item-link-img {
    width: 100%;
    object-fit: cover;
  }

  &__item-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__item-link-title {
  }

  &__item-link-price {
  }
}
.service {
}
</style>