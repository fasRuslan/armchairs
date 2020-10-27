<template>
  <section class="footer">
    <div class="wrapper">
      <h2 class="footer__title">Контакты</h2>
      <p class="footer__subtitle">Свяжитесь с нами:</p>
      <div class="footer__content">
        <ul class="footer__contact-list">
          <li class="footer__contact-item">
            <div class="footer__contact-item-icon">
              <svg>
                <use></use>
              </svg>
            </div>
            <p class="footer__contact-item-title"></p>
            <p class="footer__contact-item-subtitle"></p>
          </li>
        </ul>
        <div class="social">
          <h4 class="social__title">Наши соц. сети:</h4>
          <ul class="social__list">
            <li class="social__item">
              <svg>
                <use></use>
              </svg>
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
};
</script>


<style lang="scss">
</style>