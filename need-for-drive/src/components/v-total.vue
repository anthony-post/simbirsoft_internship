<template>
  <div class="total">
    <p class="total__title">Ваш заказ:</p>
    <ul class="total__list">
      <li>
        <span class="item__title">Пункт выдачи</span>
        <div class="item__value">
          <span>{{ selectedCity.name }}</span>
          <span>{{ selectedPoint.name }}</span>
        </div>
      </li>
      <li v-if="selectedCar.name">
        <span class="item__title">Модель</span>
        <span class="item__value">{{ selectedCar.name }}</span>
      </li>
      <li v-if="selectedColor">
        <span class="item__title">Цвет</span>
        <span class="item__value">{{ selectedColor }}</span>
      </li>
      <li v-if="rentalDuration">
        <span class="item__title">Длительность аренды</span>
        <span class="item__value" v-if="rentalDuration.days"
          >{{ rentalDuration.days }}д</span
        ><span class="item__value" v-if="rentalDuration.hours"
          >{{ rentalDuration.hours }}ч</span
        >
      </li>
      <li v-if="getNameRate">
        <span class="item__title">Тариф</span>
        <span class="item__value">{{ getNameRate }}</span>
      </li>
      <li v-if="selectedTank">
        <span class="item__title">Полный бак</span>
        <span class="item__value">Да</span>
      </li>
      <li v-if="selectedBabyChair">
        <span class="item__title">Детское кресло</span>
        <span class="item__value">Да</span>
      </li>
      <li v-if="selectedRightHandDrive">
        <span class="item__title">Правый руль</span>
        <span class="item__value">Да</span>
      </li>
    </ul>
    <!--Цена-->
    <p class="total__price" v-if="selectedCar.name">
      Цена:
      <span class="total__price total__price-thin" v-if="this.getPriceSummary"
        >{{ this.getPriceSummary }} &#8381;</span
      >
      <span class="total__price total__price-thin" v-else
        >от {{ selectedCar.priceMin }} до
        {{ selectedCar.priceMax }} &#8381;</span
      >
    </p>
    <!--Кнопка Выбрать модель-->
    <button
      class="total__button"
      v-if="this.selectedTab === 'order-place'"
      :class="{ total__button_active: selectedCity.id && selectedPoint.id }"
      :disabled="!selectedCity.id && !selectedPoint.id"
      @click="changeSelectedTab"
    >
      Выбрать модель
    </button>
    <!--Кнопка Дополнительно-->
    <button
      class="total__button"
      v-if="this.selectedTab === 'order-model'"
      :class="{ total__button_active: selectedCar.name }"
      :disabled="!selectedCar.name"
      @click="changeSelectedTabAdditional"
    >
      Дополнительно
    </button>
    <!--Кнопка Итого-->
    <button
      class="total__button"
      v-if="this.selectedTab === 'order-additional'"
      :class="{ total__button_active: selectedRate }"
      :disabled="!selectedRate"
      @click="changeSelectedTabSummary"
    >
      Итого
    </button>
    <!--Кнопка Заказать-->
    <button
      class="total__button total__button_active"
      v-if="this.selectedTab === 'order-summary'"
      @click="showPopUp"
    >
      Заказать
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "v-total",
  props: {
    tabs: {
      type: Array,
      required: false,
    },
    selectedId: {
      type: Number,
      required: false,
    },
    selectedTab: {
      type: String,
      required: false,
    },
  },
  computed: {
    //API получаем состояние объекта (в который записывается выбранный город) из store
    ...mapState({
      selectedCity: (state) => state.selectedCity,
      selectedPoint: (state) => state.selectedPoint,
      selectedCar: (state) => state.selectedCar,
      selectedColor: (state) => state.selectedColor,
      selectedDateFrom: (state) => state.selectedDateFrom,
      dateStateFrom: (state) => state.dateFrom,
      dateStateTo: (state) => state.dateTo,
      rentalDuration: (state) => state.rentalDuration,
      selectedRate: (state) => state.selectedRate,
      selectedTank: (state) => state.selectedTank,
      selectedBabyChair: (state) => state.selectedBabyChair,
      selectedRightHandDrive: (state) => state.selectedRightHandDrive,
      priceSummary: (state) => state.priceSummary,
      popUpConfirm: (state) => state.popUpConfirm,
      orderId: (state) => state.orderId,
      orderConfirmed: (state) => state.orderConfirmed,
    }),
    ...mapGetters(["RATELIST"]),
    getNameRate() {
      //поиск выбранного id в массиве и получение его наименования
      let nameRate = "";
      for (let i = 0; i < this.RATELIST.length; i++) {
        if (this.RATELIST[i].id === this.selectedRate) {
          nameRate = this.RATELIST[i].rateTypeId.name;
        }
      }
      return nameRate;
    },
    getPriceSummary() {
      let priceCalculated;
      // let duration = Math.round(this.dateStateTo - this.dateStateFrom);
      let duration = this.dateStateTo - this.dateStateFrom;
      let rateDayId = "60b958582aed9a0b9b7ed3d6";
      let rateWeekId = "60c614202aed9a0b9b84f543";
      let rateMonthId = "6114e4a02aed9a0b9b850848";
      let rateMinId = "61af4296bb7a006c05c54c4b";
      let priceTank = 500;
      let priceBabyChair = 200;
      let priceRightHandDrive = 1600;
      for (let i = 0; i < this.RATELIST.length; i++) {
        //dayly rate
        if (
          this.selectedRate === this.RATELIST[i].id &&
          this.selectedRate === rateDayId
        ) {
          let rateDayPrice = this.RATELIST[i].price / 86400000;
          if (duration >= 86400000) {
            priceCalculated = Math.round(duration * rateDayPrice);
          } else {
            alert(
              "Выберите, пожалуйста, другой тариф или укажите другой диапазон времени"
            );
          }
          priceCalculated = this.calcAddService(
            priceCalculated,
            priceTank,
            priceBabyChair,
            priceRightHandDrive
          );
        }
        //weekly rate
        if (
          this.selectedRate === this.RATELIST[i].id &&
          this.selectedRate === rateWeekId
        ) {
          let rateWeekPrice = this.RATELIST[i].price / (7 * 86400000);
          if (duration >= 7 * 86400000) {
            priceCalculated = Math.round(duration * rateWeekPrice);
          } else {
            alert(
              "Выберите, пожалуйста, другой тариф или укажите другой диапазон времени"
            );
          }
          priceCalculated = this.calcAddService(
            priceCalculated,
            priceTank,
            priceBabyChair,
            priceRightHandDrive
          );
        }
        //monthly rate
        if (
          this.selectedRate === this.RATELIST[i].id &&
          this.selectedRate === rateMonthId
        ) {
          let rateMonthPrice = this.RATELIST[i].price / (30 * 86400000);
          if (duration >= 30 * 86400000) {
            priceCalculated = Math.round(duration * rateMonthPrice);
          } else {
            alert(
              "Выберите, пожалуйста, другой тариф или укажите другой диапазон времени"
            );
          }
          priceCalculated = this.calcAddService(
            priceCalculated,
            priceTank,
            priceBabyChair,
            priceRightHandDrive
          );
        }
        //min rate
        if (
          this.selectedRate === this.RATELIST[i].id &&
          this.selectedRate === rateMinId
        ) {
          let rateMinPrice = this.RATELIST[i].price / 60000;
          if (duration < 86400000) {
            priceCalculated = Math.round(duration * rateMinPrice);
          } else {
            alert(
              "Выберите, пожалуйста, другой тариф или укажите другой диапазон времени"
            );
          }
          priceCalculated = this.calcAddService(
            priceCalculated,
            priceTank,
            priceBabyChair,
            priceRightHandDrive
          );
        }
      }
      return priceCalculated;
    },
  },
  methods: {
    ...mapActions(["POST_ORDER_TO_API"]),
    // TO DO переключение на следующую вкладку
    changeSelectedTab() {
      const newSelectedTab = this.tabs[this.selectedId + 1].id;
      this.$emit("updateSelectedTab", newSelectedTab);
    },
    changeSelectedTabAdditional() {
      const newSelectedTab = this.tabs[this.selectedId + 2].id;
      this.$emit("updateSelectedTab", newSelectedTab);
    },
    changeSelectedTabSummary() {
      const newSelectedTab = this.tabs[this.selectedId + 3].id;
      this.$emit("updateSelectedTab", newSelectedTab);
      this.$store.commit("SET_PRICESUMMARY", this.getPriceSummary);
    },
    showPopUp() {
      this.POST_ORDER_TO_API();
      this.$store.commit("SET_POPUPCONFIRM");
    },
    calcAddService(
      priceCalculated,
      priceTank,
      priceBabyChair,
      priceRightHandDrive
    ) {
      if (this.selectedTank) {
        priceCalculated += priceTank;
      }
      if (this.selectedBabyChair) {
        priceCalculated += priceBabyChair;
      }
      if (this.selectedRightHandDrive) {
        priceCalculated += priceRightHandDrive;
      }
      return priceCalculated;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.total {
  width: 288px;
  padding: 32px 64px 0 32px;
  border-left: 1px solid $color-grey-light;
  height: calc(100vh - 180px);
}

.total__title {
  font-family: $ff;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: right;
  color: $color-title;
  margin-top: 0;
}

.total__list {
  list-style: none;
  padding: 0;
}

.total__list li {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 0 0 16px 0;
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color-grey;
}

.total__list li .item__title {
  order: 1;
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color-title;
  margin: 0;
}

.total__list li .item__value {
  order: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color-grey;
}

.total__list li::after {
  background-image: radial-gradient(
    circle,
    currentcolor 1px,
    transparent 1.5px
  );
  background-position: bottom;
  background-size: 1ex 4.5px;
  background-repeat: space no-repeat;
  content: "";
  flex-grow: 1;
  height: 1em;
  order: 2;
}

.total__text {
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color-title;
  margin: 0;
}

.total__price {
  font-family: $ff;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: $color-title;
  margin: 32px 0;
}

.total__price-thin {
  font-weight: 400;
}

.total__button {
  font-family: $ff;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: $color-white;
  background: $color-grey-light;
  border-radius: 8px;
  border: none;
  padding: 15px 0;
  width: 100%;
}

.total__button_active {
  background: $color-text;
  cursor: pointer;
}

.total__button_active:hover,
.total__button_active:focus {
  background: linear-gradient(90deg, #0b934a 2.61%, #026e47 112.6%);
}

.total__button_active:active {
  background: linear-gradient(90deg, #076432 2.61%, #013c27 112.6%);
}

.button-colored {
  background: linear-gradient(90deg, #493013 0%, #7b0c3b 100%);
  border-radius: 4px;
}

@media #{$media} and (min-width: 1024px) and (max-width: 1439px) {
  .total {
    padding: 32px 32px 0 32px;
  }
}

@media #{$media} and (min-width: 768px) and (max-width: 1023px) {
  .total__button {
    font-size: 16px;
  }

  .total {
    width: 25vw;
  }
}

@media #{$media} and (min-width: 320px) and (max-width: 767px) {
  .total {
    width: 100vw;
    height: auto;
    border: none;
    padding: 16px 0;
  }

  .total__title,
  .total__price {
    padding: 0 16px;
  }

  .total__list li {
    padding: 0 16px;
  }
}
</style>
