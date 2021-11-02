<template>
  <div class="total">
    <p class="total__title">Ваш заказ:</p>
    <p class="total-wrp">
      <span class="total__text">Пункт выдачи</span>
      <span class="dots"></span>
      <span class="total__city">{{ chosenCityName }}</span>
      <span class="total__city">{{ chosenAddress }}</span>
    </p>
    <p class="total-wrp" v-if="this.selectedTab === 'order-model'">
      <span class="total__text">Модель</span>
      <span class="dots"></span>
      <span class="total__city"></span>
    </p>
    <p class="total__price">Цена:</p>
    <button
      class="total__button"
      v-if="this.selectedTab === 'order-place'"
      :class="{ total__button_active: chosenCityName && chosenAddress }"
      :disabled="!chosenCityName && !chosenAddress"
      @click="changeSelectedTab"
    >
      Выбрать модель
    </button>
    <button class="total__button" v-if="this.selectedTab === 'order-model'">
      Дополнительно
    </button>
  </div>
</template>

<script>
export default {
  name: "v-total",
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    selectedId: {
      type: Number,
      required: true,
    },
    selectedTab: {
      type: String,
      required: true,
    },
  },
  computed: {
    chosenCityName() {
      return this.$store.state.city.name;
    },
    chosenAddress() {
      return this.$store.state.city.address;
    },
  },
  // TO DO переключение на следующую вкладку
  methods: {
    changeSelectedTab() {
      const newSelectedTab = this.tabs[this.selectedId + 1].id;
      this.$emit("updateSelectedTab", newSelectedTab);
    },
  },
};
</script>
