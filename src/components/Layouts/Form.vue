<template>
  <form action="" class="form" @submit.prevent="submit">
    <div class="form-group">
      <input class="form-control" placeholder="Имя" v-model="name">
    </div>
    <div class="form-group">
      <input class="form-control" placeholder="+7(___) ___-__-__" v-model="tel" v-mask="'+7 (###) ###-##-##'">
    </div>
    <div class="form-group">
      <button type="submit">
        Отправить
      </button>
    </div>
    <div class="form-group">
      {{message}}
    </div>
  </form>
</template>

<script>
  import SimpleVueValidator from 'simple-vue-validator';
  const Validator = SimpleVueValidator.Validator;
  import axios from "axios";

export default {
  mixins: [SimpleVueValidator.mixin],
  name: "Form",
  data() {
    return {
      name: "",
      tel: "",
      message: ""
    }
  },
  validators: {
    name: function (value) {
      return Validator.value(value)
        .required()
        .minLength(4, "Введите не меннее 3 символов");
    },
    tel: function (value) {
      return Validator.value(value)
        .required()
        .minLength(18, "Неккоректно заполнен номер телефона");
    },
  },
  methods: {
    submit: function () {
      this.$validate().then(function (success) {
        if (success) {
          this.mail();
        }
      });
    },
    mail: function () {
      let self = this;
      axios({
        method: "Post",
        url: "form.php",
        data: {
          name: self.name,
          tel: self.tel
        },
      }).then(function (response) {
        self.name = "";
        self.tel = "";
        self.message = response.data;
      });
    },
  },
};
</script>
<style lang="scss">
.form {
}
</style>