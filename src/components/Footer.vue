<template>
  <section class="footer">
    <div class="wrapper">
      <h2 class="footer__title">{{ footerTitle }}</h2>
      <p class="footer__subtitle">{{ footerSubtitle }}</p>
      <div class="footer__content">
        <ul class="footer__contact-list">
          <li
            class="footer__contact-item"
            v-for="(contactItem, index) in footerContactList"
            :key="index"
          >
            <div class="footer__contact-item-icon">
              <img v-bind:src="contactItem.icon" alt="" />
            </div>
            <p class="footer__contact-item-title">{{ contactItem.title }}</p>
            <p class="footer__contact-item-subtitle">
              {{ contactItem.subtitle }}
            </p>
          </li>
        </ul>
        <div class="social">
          <h4 class="social__title">{{ footerSocialTitle }}</h4>
          <ul class="social__list">
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
      <div class="footer__map"></div>
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
</style>