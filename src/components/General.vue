<template>
  <section class="general">
    <div class="wrapper">
      <h1 class="general__title">ОФИСНЫЕ КРЕСЛА ОТ ПРОИЗВОДИТЕЛЯ</h1>
      <p class="general__subtitle">
        Ваш рабочий процесс будет обеспечен комфортом и продуктивностью
      </p>
      <button class="general__popup"></button>
      <Form />
    </div>
  </section>
</template>

<script>
import Form from "./Form.vue";

export default {
  name: "General",
  components: {
    Form,
  },
};
</script>


<style lang="scss">
.general {
}
</style>