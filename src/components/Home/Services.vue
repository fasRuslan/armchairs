<template>
  <section class="services" id="services">
    <div class="wrapper">
      <h2 class="services__title text-center">
        Каталог продукции офисных кресел
      </h2>
      <p class="services__subtitle text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <ul
        class="services__list d-flex justify-content-between align-items-center"
      >
        <li
          class="services__item"
          v-for="(serviceItem, index) in services__list"
          :key="index"
        >
          <a href="#" class="services__item-link">
            <img
              class="service__item-link-img"
              v-bind:src="serviceItem.img"
              alt=""
            />
            <p class="service__item-link-title">{{ serviceItem.title }}</p>
            <p class="service__item-link-price">{{ serviceItem.price }}</p>
            <router-link
              :to="{ name: 'Catalog' }"
              class="service__item-link-button"
            >
              {{ serviceItem.button }}
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
          img: "/img/general__catalog/1.png",
          title: "Сенатор-1",
          price: "5 350 руб.",
          button: "Перейти в каталог",
        },
        {
          img: "/img/general__catalog/2.png",
          title: "Менеджер-1",
          price: "5 100 руб.",
          button: "Перейти в каталог",
        },
        {
          img: "/img/general__catalog/3.png",
          title: "Ральф",
          price: "3 900 руб.",
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