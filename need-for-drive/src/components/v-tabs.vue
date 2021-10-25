<template>
  <div class="tabs">
    <div class="tabs__border">
      <ul class="tab-list order-center">
        <li class="tab__item">
          <button
            class="tab__item-btn"
            v-for="(tab, index) in tabs"
            :key="index"
            :disabled="!filledUpData"
            :class="{ tab__item_active: selectedTab === tab.id }"
            @click="switchTab"
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
      <VTotal />
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
        { label: "Местоположение", id: "order-place" },
        { label: "Модель", id: "order-model" },
        { label: "Дополнительно", id: "order-additional" },
        { label: "Итого", id: "order-summary" },
      ],
      selectedTab: "order-place",
    };
  },
  //TO DO последовательное переключение вкладок
  computed: {
    filledUpData() {
      if (this.$store.state.city.name && this.$store.state.city.address)
        return true;
      else return false;
    },
  },
  methods: {
    switchTab() {
      if (this.filledUpData) {
        this.selectedTab = "order-model";
      }
    },
  },
};
</script>
