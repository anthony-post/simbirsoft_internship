<template>
  <div class="tabs">
    <div class="tabs__border">
      <ul class="tab-list order-center">
        <li class="tab__item">
          <button
            class="tab__item-btn"
            v-for="tab in filledUpData"
            :key="tab.id"
            :class="{ tab__item_active: selectedTab === tab.id }"
            :disabled="tab.isDisabled"
            @click="selectedTab = tab.id"
          >
            {{ tab.label }}
            <span class="tab__item-icon">
              <vicon icon-id="icon-arrow" width="6" height="8" />
            </span>
          </button>
        </li>
      </ul>
    </div>
    <div class="order">
      <div class="order__window">
        <component :is="selectedTab"></component>
      </div>
      <VTotal @updateSelectedTab="updateSelectedTab" />

      <!-- <div class="total">
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
        <button
          class="total__button"
          :class="{ total__button_active: chosenCityName && chosenAddress }"
          :disabled="!chosenCityName && !chosenAddress"
          @click="switchTab"
        >
          Выбрать модель
        </button>
      </div> -->

      <!-- <VTotal
        :tabs="tabs"
        :selectedId="selectedId"
        :selectedTab="selectedTab"
      /> -->
    </div>
  </div>
</template>

<script>
import Vicon from "@/components/v-icon.vue";
import OrderPlace from "@/components/order-place.vue";
import OrderModel from "@/components/order-model.vue";
import OrderAdditional from "@/components/order-additional.vue";
import OrderSummary from "@/components/order-summary.vue";
import VTotal from "@/components/v-total.vue";

export default {
  name: "v-tabs",
  components: {
    Vicon,
    OrderPlace,
    OrderModel,
    OrderAdditional,
    OrderSummary,
    VTotal,
  },
  data() {
    return {
      tabs: [
        { label: "Местоположение", id: "order-place", isDisabled: true },
        { label: "Модель", id: "order-model", isDisabled: true },
        { label: "Дополнительно", id: "order-additional", isDisabled: true },
        { label: "Итого", id: "order-summary", isDisabled: true },
      ],
      selectedId: 0,
      selectedTab: "order-place",
    };
  },
  //TO DO последовательное переключение вкладок
  computed: {
    filledUpData() {
      if (this.$store.state.city.name && this.$store.state.city.address) {
        const arr = [...this.tabs];
        arr[this.selectedId].isDisabled = false;
        arr[this.selectedId + 1].isDisabled = false;
        return arr;
      }
      //TO DO условие для вкладки Модель
      //TO DO условие для вкладки Дополнительно
      //TO DO условие для вкладки Итого
      return this.tabs;
    },
    // chosenCityName() {
    //   return this.$store.state.city.name;
    // },
    // chosenAddress() {
    //   return this.$store.state.city.address;
    // },
  },
  methods: {
    // switchTab() {
    //   this.selectedTab = this.tabs[this.selectedId + 1].id;
    // },

    updateSelectedTab(newValue) {
      this.selectedTab = newValue;
    },
  },
};
</script>
