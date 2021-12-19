<template>
  <div class="total">
    <p class="total__title">Ваш заказ:</p>
    <!--Пункт выдачи-->
    <p class="total-wrp">
      <span class="total__text">Пункт выдачи</span>
      <span class="dots"></span>
      <span class="total__chosen-item">{{ selectedCity.name }}</span>
      <span class="total__chosen-item">{{ selectedPoint.name }}</span>
    </p>
    <!--Модель-->
    <p
      class="total-wrp"
      v-if="
        this.selectedTab === 'order-model' ||
        this.selectedTab === 'order-additional'
      "
    >
      <span class="total__text">Модель</span>
      <span class="dots"></span>
      <span class="total__chosen-item">{{ selectedCar.name }}</span>
    </p>
    <!--Цвет-->
    <p class="total-wrp" v-if="this.selectedTab === 'order-additional'">
      <span class="total__text">Цвет</span>
      <span class="dots"></span>
      <span class="total__chosen-item">{{ selectedColor }}</span>
    </p>
    <!--Длительность аренды-->
    <p class="total-wrp" v-if="this.selectedTab === 'order-additional'">
      <span class="total__text">Длительность аренды</span>
      <span class="dots"></span>
      <span class="total__chosen-item"></span>
    </p>
    <!--Тариф-->
    <p class="total-wrp" v-if="this.selectedTab === 'order-additional'">
      <span class="total__text">Тариф</span>
      <span class="dots"></span>
      <span class="total__chosen-item">{{ selectedRate }}</span>
    </p>
    <!--Полный бак-->
    <p class="total-wrp" v-if="this.selectedTab === 'order-additional'">
      <span class="total__text">Полный бак</span>
      <span class="dots"></span>
      <span class="total__chosen-item" v-if="selectedTank">Да</span>
    </p>
    <!--Детское кресло-->
    <p class="total-wrp" v-if="this.selectedTab === 'order-additional'">
      <span class="total__text">Детское кресло</span>
      <span class="dots"></span>
      <span class="total__chosen-item" v-if="selectedBabyChair">Да</span>
    </p>
    <!--Правый руль-->
    <p class="total-wrp" v-if="this.selectedTab === 'order-additional'">
      <span class="total__text">Правый руль</span>
      <span class="dots"></span>
      <span class="total__chosen-item" v-if="selectedRightHandDrive">Да</span>
    </p>
    <!--Цена-->
    <p class="total__price">
      Цена:
      <!--TO DO цена ОТ и ДО должна высчитываться в зависимости от выбранных параметров-->
      <span class="total__price total__price-thin" v-if="selectedCar.name"
        >от {{ selectedCar.priceMin }} до {{ selectedCar.priceMax }} руб.</span
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
    >
      Итого
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

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
    //API получаем состояние объекта (в который записывается выбранный город) из store
    ...mapState({
      selectedCity: (state) => state.selectedCity,
      selectedPoint: (state) => state.selectedPoint,
      selectedCar: (state) => state.selectedCar,
      selectedColor: (state) => state.selectedColor,
      selectedRate: (state) => state.selectedRate,
      selectedTank: (state) => state.selectedTank,
      selectedBabyChair: (state) => state.selectedBabyChair,
      selectedRightHandDrive: (state) => state.selectedRightHandDrive,
    }),
  },
  // TO DO переключение на следующую вкладку
  methods: {
    changeSelectedTab() {
      const newSelectedTab = this.tabs[this.selectedId + 1].id;
      this.$emit("updateSelectedTab", newSelectedTab);
    },
    changeSelectedTabAdditional() {
      const newSelectedTab = this.tabs[this.selectedId + 2].id;
      this.$emit("updateSelectedTab", newSelectedTab);
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
  // height: calc(100vh - 165px);
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

.total-wrp {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.total-wrp .total__text,
.total-wrp .total__city {
  flex: 1 0 auto;
}

.total-wrp .dots {
  flex: 0 1 auto;
  /*Allows too long content to be hidden.*/
  overflow: hidden;
}

.dots {
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color-grey;
}

.dots::before {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  content: ". . . . . . . . . . . . . . . . . . . . "
    ". . . . . . . . . . . . . . . . . . . . "
    ". . . . . . . . . . . . . . . . . . . . "
    ". . . . . . . . . . . . . . . . . . . . ";
}

.total__text {
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color-title;
}

.total__chosen-item {
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color-grey;
}

.total__price {
  font-family: $ff;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: $color-title;
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
  .total-wrp,
  .total__price {
    padding: 0 16px;
  }
}
</style>
