<template>
  <div class="total">
    <p class="total__title">Ваш заказ:</p>
    <p class="total-wrp">
      <span class="total__text">Пункт выдачи</span>
      <span class="dots"></span>
      <span class="total__city">{{ selectedCity.name }}</span>
      <span class="total__city">{{ selectedPoint.name }}</span>
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
      :class="{ total__button_active: selectedCity.id && selectedPoint.id }"
      :disabled="!selectedCity.id && !selectedPoint.id"
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
    }),
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

.total__city {
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
