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
      <VTotal
        :tabs="tabs"
        :selectedId="selectedIndexTabs"
        :selectedTab="selectedTab"
        @updateSelectedTab="updateSelectedTab"
      />
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
import { mapState } from "vuex"; //SELECTED

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
      selectedIndexTabs: 0,
      selectedTab: "order-place",
    };
  },
  //TO DO последовательное переключение вкладок
  computed: {
    //SELECTED получаем состояние объекта (в который записывается выбранный город) из store
    ...mapState({
      selectedCity: (state) => state.selectedCity,
      selectedPoint: (state) => state.selectedPoint,
      selectedCar: (state) => state.selectedCar,
    }),
    //проверка на заполняемость данных для навигации по вкладкам
    filledUpData() {
      const arr = [...this.tabs];

      if (
        Object.keys(this.selectedCity).length &&
        Object.keys(this.selectedPoint).length !== 0
      ) {
        arr[this.selectedIndexTabs].isDisabled = false;
        arr[this.selectedIndexTabs + 1].isDisabled = false;
        return arr;
      }
      //TO DO условие для вкладки Модель
      if (Object.keys(this.selectedCar).length !== 0) {
        arr[this.selectedIndexTabs + 2].isDisabled = false;
        return arr;
      }
      //TO DO условие для вкладки Дополнительно
      //TO DO условие для вкладки Итого
      return this.tabs;
    },
  },
  methods: {
    updateSelectedTab(newSelectedTab) {
      this.selectedTab = newSelectedTab;
      //TO DO увеличение в зависимости от того, какая выбрана вкладка (вместо changeSelectedTabAdditional в компоненте v-total)
      // this.selectedIndexTabs++;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.tabs__border {
  border-top: 1px solid $color-grey-light;
  border-bottom: 1px solid $color-grey-light;
}

.tab-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style-type: none;
  padding: 0 64px;
  margin: 0;
}

.tab__item-btn {
  font-family: $ff;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: $color-grey;
  margin: 7px 0;
  cursor: pointer;
  border: none;
  background-color: $color-white;
  padding: 0;
}

.tab__item-icon {
  padding: 0 0 0 20px;
}

.tab__item_active {
  color: $color-text;
}

.order {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.order__window {
  flex-basis: 70%;
  padding: 32px 150px 0 64px;
}

@media #{$media} and (min-width: 1024px) and (max-width: 1439px) {
  .order__window {
    padding: 32px 32px 0 32px;
  }

  .tab-list {
    padding: 0 32px;
  }
}

@media #{$media} and (min-width: 768px) and (max-width: 1023px) {
  .order__window {
    padding: 32px 32px 0 64px;
  }
}

@media #{$media} and (min-width: 320px) and (max-width: 767px) {
  .order {
    flex-wrap: wrap;
  }

  .order__window {
    flex-basis: 100%;
    padding: 16px 16px 0 16px;
  }

  .tab-list {
    padding: 0 16px;
    flex-wrap: wrap;
  }
}
</style>
