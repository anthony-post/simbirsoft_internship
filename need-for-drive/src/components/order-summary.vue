<!--TO DO-->
<template>
  <div class="summary__wrp">
    <div>
      <p class="summary__car-name">{{ selectedCar.name }}</p>
      <div class="car-number__wrp">
        <p class="summary__car-number">{{ selectedCar.number }}</p>
      </div>
      <p class="summary__additional" v-if="selectedTank">
        Топливо <span class="summary__selected-value">100%</span>
      </p>
      <p class="summary__additional" v-if="selectedBabyChair">
        Детское кресло <span class="summary__selected-value">Да</span>
      </p>
      <p class="summary__additional" v-if="selectedRightHandDrive">
        Правый руль <span class="summary__selected-value">Да</span>
      </p>
      <p class="summary__additional">
        Доступна с
        <span class="summary__selected-value">{{ selectedDateFrom }}</span>
      </p>
    </div>
    <img
      class="car__img"
      :src="selectedCar.thumbnail.path"
      :alt="selectedCar.thumbnail.originalname"
    />
  </div>
</template>

<script>
import { mapState } from "vuex"; //SELECTED

export default {
  name: "order-summary",
  computed: {
    //SELECTED
    ...mapState({
      selectedCar: (state) => state.selectedCar,
      selectedColor: (state) => state.selectedColor,
      selectedDateFrom: (state) => state.selectedDateFrom,
      selectedDateTo: (state) => state.selectedDateTo,
      selectedTimeTo: (state) => state.selectedTimeTo,
      selectedRate: (state) => state.selectedRate,
      selectedTank: (state) => state.selectedTank,
      selectedBabyChair: (state) => state.selectedBabyChair,
      selectedRightHandDrive: (state) => state.selectedRightHandDrive,
      orderId: (state) => state.orderId,
    }),
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.summary__wrp {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.summary__title {
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: $color-title;
}

.summary__car-name {
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: $color;
}

.car-number__wrp {
  border: 1px solid #999999;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 5px;
  width: 94px;
  text-align-last: center;
}

.summary__car-number {
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: $color;
  margin: 0;
}

.summary__additional {
  font-family: $ff;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: $color;
}

.summary__selected-value {
  font-weight: 300;
}

.car__img {
  max-width: 50%;
}
</style>
