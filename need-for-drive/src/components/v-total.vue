<template>
  <div class="total">
    <p class="total__title">Ваш заказ:</p>
    <div>
      <p class="total-wrp">
        <span class="total__text">Пункт выдачи</span>
        <span class="dots"></span>
        <span class="total__city">{{ chosenCityName }}</span>
        <span class="total__city">{{ chosenAddress }}</span>
      </p>
    </div>
    <p class="total__price">Цена:</p>
    <button class="total__button">Выбрать модель</button>
  </div>
</template>

<script>
export default {
  name: "v-total",
  computed: {
    chosenCityName() {
      return this.$store.state.city.name;
    },
    chosenAddress() {
      return this.$store.state.city.address;
    },
  },
};
</script>
