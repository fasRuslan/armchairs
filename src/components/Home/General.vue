<template>
  <section class="general">
    <div class="wrapper">
      <div class="general__content col-5">
        <h1 class="general__title">ОФИСНЫЕ КРЕСЛА ОТ ПРОИЗВОДИТЕЛЯ</h1>
        <p class="general__subtitle">
          Ваш рабочий процесс будет <br />
          обеспечен комфортом и <br />продуктивностью
        </p>
        <button class="general__popup">Оставить заявку</button>
        <Form />
      </div>
    </div>
  </section>
</template>

<script>
import Form from "../Layouts/Form.vue";

export default {
  name: "General",
  components: {
    Form,
  },
};
</script>


<style lang="scss">
.general {
  padding: 60px 2%;
  background-image: url("/img/general/fone.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 80vh;

  .general__content {
    width: 50%;
  }
  .general__title {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .general__subtitle {
  }

  .general__popup {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>