<template>
  <section class="footer">
    <div class="wrapper">
      <h2 class="footer__title">{{ footerTitle }}</h2>
      <p class="footer__subtitle">{{ footerSubtitle }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="footer__content col-4">
          <ul class="footer__contact-list">
            <li
              class="footer__contact-item d-flex align-items-center"
              v-for="(contactItem, index) in footerContactList"
              :key="index"
            >
              <div class="footer__contact-item-icon">
                <img v-bind:src="contactItem.icon" alt="" />
              </div>
              <div class="footer__content-item-text">
                <p class="footer__contact-item-title">
                  {{ contactItem.title }}
                </p>
                <p class="footer__contact-item-subtitle">
                  {{ contactItem.subtitle }}
                </p>
              </div>
            </li>
          </ul>
          <div class="social">
            <h4 class="social__title">{{ footerSocialTitle }}</h4>
            <ul
              class="social__list d-flex justify-content-between align-items-center"
            >
              <li
                class="social__item"
                v-for="footerSocialItem in footerSocialList"
                :key="footerSocialItem.icon"
              >
                <img v-bind:src="footerSocialItem.icon" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__map">
          <div style="position: relative; overflow: hidden">
            <a
              href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps"
              style="color: #eee; font-size: 12px; position: absolute; top: 0px"
              >Яндекс.Карты</a
            ><a
              href="https://yandex.ru/maps/geo/moskva/53000094/?ll=37.385524%2C55.584222&utm_medium=mapframe&utm_source=maps&z=9.18"
              style="
                color: #eee;
                font-size: 12px;
                position: absolute;
                top: 14px;
              "
              >Москва — Яндекс.Карты</a
            ><iframe
              src="https://yandex.ru/map-widget/v1/-/CCQ~b4D6lA"
              width="560"
              height="400"
              frameborder="1"
              allowfullscreen="true"
              style="position: relative"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footerTitle: "Контакты",
      footerSubtitle: "Свяжитесь с нами:",
      footerContactList: [
        {
          icon: "/img/footer/geo.svg",
          title: "г.Москва",
          subtitle: "ул. Пушкина",
        },
        {
          icon: "/img/footer/tel.svg",
          title: "Время работы",
          subtitle: "c 10 00 до 20 00",
        },
        {
          icon: "/img/footer/time.svg",
          title: "Связь",
          subtitle: "7(999) 999-99-99",
        },
      ],
      footerSocialTitle: "Наши соц.сети:",
      footerSocialList: [
        {
          icon: "/img/footer/social__list/facebook.svg",
        },
        {
          icon: "/img/footer/social__list/vk.svg",
        },
        {
          icon: "/img/footer/social__list/whatsapp.svg",
        },
      ],
    };
  },
};
</script>


<style lang="scss">
.footer {
  padding: 60px 2%;
  &__title {
    margin-bottom: 20px;
  }

  &__subtitle {
  }

  &__content {
  }

  &__contact-list {
  }

  &__contact-item {
  }

  &__contact-item-icon {
  }

  &__content-item-text {
    margin-left: 20px;
  }

  &__contact-item-title {
  }

  &__contact-item-subtitle {
    color: #6d6d6d;
  }

  .social {
    width: 50%;
  }
  .social__title {
    font-size: 24px;
    font-weight: 500;
  }

  &__map {
  }
}
</style>