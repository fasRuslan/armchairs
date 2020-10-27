<template>
  <section class="reviews">
    <h2 class="reviews__title">Отзывы наших довольных клиентов</h2>
  </section>
</template>

<script>
export default {
  name: "Reviews",
  data() {
    return {
      reviewsList: [
        {
          img: "/img/reviews/person.png",
          title: "Дмитрий Рогалев",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
</style>