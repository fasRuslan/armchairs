<template>
  <div class="mobile-menu">
    <button class="nav__toogle nav__toogle--close toogle-js" v-on:click="func">
      <span class="span-menu"></span>
    </button>
    <ul class="nav-menu__list nav-menu__list--close nav-js">
      <li class="nav-menu__item title__item-mob">Кресла</li>
      <li class="nav-menu__item logo__item-mob">
        <a href="#" class="nav-menu__link">
          <img src="img/logo/logo-nav.png" alt="" />
        </a>
      </li>
      <li class="nav-menu__item">
        <a href="#services" class="nav-menu__link" data-target="anchor">
          Главная
        </a>
      </li>
      <li class="nav-menu__item">
        <a href="#certificate" class="nav-menu__link" data-target="anchor">
          Каталог
        </a>
      </li>
      <li class="nav-menu__item">
        <a href="#team" class="nav-menu__link" data-target="anchor">
          О компании
        </a>
      </li>
      <li class="nav-menu__item">
        <a href="#guests" class="nav-menu__link" data-target="anchor">
          Отзывы
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderMobile",

  methods: {
    func: function () {
      const toggle = document.querySelector(".toogle-js");
      const nav = document.querySelector(".nav-js");

      toggle.classList.toggle("nav__toogle--open");
      toggle.classList.toggle("nav__toogle--close");
      nav.classList.toggle("nav-menu__list--close");
      nav.classList.toggle("nav-menu__list--open");
    },
  },
};
</script>

<style lang="scss">
.nav-menu__list {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 21;
  width: 100%;
  max-width: 500px;
  background-color: white;
  transition: all 0.5s ease-in-out;
  &--close {
    display: none;
  }
  &--open {
    right: 0;
    transition: all 0.5s ease-in-out;
  }
}
.nav__toogle {
  outline: none;
  border: none;
  width: 35px;
  height: 20px;
  background-color: transparent;
  position: absolute;
  top: 20px;
  right: 30px;
  z-index: 99;
  transition: all 0.1s linear;

  &--close {
    &::before {
      content: "";
      width: 100%;
      height: 2px;
      background-color: black;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transition: all 0.1s linear;
    }

    &::after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: black;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      transition: all 0.1s linear;
    }
    .span-menu {
      width: 100%;
      height: 2px;
      background-color: black;
      position: absolute;
      left: 0;
      right: 0;
      top: calc(50% - 1px);
      transition: all 0.1s linear;
    }
  }
  &--open {
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: black;
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      transform: rotate(45deg);
      transition: all 0.1s linear;
    }
    &::before {
      content: "";
      width: 100%;
      height: 2px;
      background-color: black;
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      transform: rotate(-45deg);
      transition: all 0.1s linear;
    }
    .span-menu {
      opacity: 0;
      visibility: hidden;
      transition: all 0.1s linear;
    }
  }
}
</style>