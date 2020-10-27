<template>
  <form action="" class="form" @submit.prevent="submit"></form>
</template>

<script>
import SimpleVueValidator from "simple-vue-validator";

const Validator = SimpleVueValidator.Validator;

// import axios from "axios";

export default {
  mixins: [SimpleVueValidator.mixin],
  name: "Form",
  data() {
    return {
      name: "",
      tel: "",
    };
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
    // mail: function () {
    //   axios({
    //     method: "Post",
    //     url: "mail.php",
    //     data: {
    //       name: this.name,
    //       tel: this.tel,
    //     },
    //   }).then(function (response) {
    //     this.name = "";
    //     this.tel = "";
    //   });
    // },
  },
};
</script>
<style lang="scss">
.form {
}
</style>