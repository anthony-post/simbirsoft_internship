<template>
  <div class="additional-wrp">
    <p class="additional__text">Цвета</p>
    <div class="radio-list">
      <VRadio
        label="Любой"
        v-model="checkedColor"
        @change="resetSelectedColor"
      />
      <VRadio
        v-for="color in getCarColors"
        :key="color"
        :label="color"
        :value="color"
        v-model="checkedColor"
        @change="setSelectedColor"
      />
    </div>
    <p class="additional__text">Дата аренды</p>
    <div class="additional-input__wrp">
      <p>
        <VSelect
          :options="dateFrom"
          @select="setSelectedDateFrom"
          @reset="resetSelectedDateFrom"
          :selected="selectedDateFrom"
          pretext="C"
        />
      </p>
      <p>
        <!--альтернативный вариант выбора даты и время-->
        <VSelectCopy
          :options="dateTo"
          :options2="timeTo"
          @select="setSelectedDateTo"
          @select2="setSelectedTimeTo"
          @reset="resetSelectedTo"
          :selected="selectedDateTo"
          :selected2="selectedTimeTo"
          pretext="По"
        />
      </p>
    </div>
    <p class="additional__text">Тариф</p>
    <div class="tarif-wrp">
      <VRadio
        v-for="rate in RATELIST"
        :key="rate.id"
        :label="
          rate.rateTypeId.name + ', ' + rate.price + 'Р/' + rate.rateTypeId.unit
        "
        :value="rate.id"
        v-model="checkedRate"
        @change="setSelectedRate"
      />
    </div>
    <p class="additional__text">Доп услуги</p>
    <div class="services-wrp">
      <!--TO DO checkbox-->
      <VCheckbox
        label="Полный бак, 500р"
        value="Да"
        v-model="checkedTank"
        @change="setSelectedTank"
      />
      <VCheckbox
        label="Детское кресло, 200р"
        value="Да"
        v-model="checkedBabyChair"
        @change="setSelectedBabyChair"
      />
      <VCheckbox
        label="Правый руль, 1600р"
        value="Да"
        v-model="checkedRightHandDrive"
        @change="setSelectedRightHandDrive"
      />
    </div>
  </div>
</template>

<script>
import VRadio from "@/components/v-radio.vue";
import VSelect from "@/components/v-select.vue";
import VSelectCopy from "@/components/v-select copy.vue";
import VCheckbox from "@/components/v-checkbox.vue";
import { mapState } from "vuex"; //SELECTED
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "order-additional",
  components: {
    VRadio,
    VSelect,
    VSelectCopy,
    VCheckbox,
  },
  data() {
    return {
      dateFrom: [
        { value: "12.01.2021 9:00", id: 1 },
        { value: "12.01.2021 10:00", id: 2 },
        { value: "12.01.2021 11:00", id: 3 },
      ],
      dateTo: [
        { value: "12.01.2021", id: 1 },
        { value: "12.02.2021", id: 2 },
        { value: "12.03.2021", id: 3 },
        { value: "12.04.2021", id: 4 },
        { value: "12.05.2021", id: 5 },
        { value: "12.08.2021", id: 6 },
        { value: "12.09.2021", id: 7 },
        { value: "01.01.2022", id: 8 },
        { value: "01.02.2022", id: 9 },
      ],
      timeTo: [
        { value: "9:00", id: 1 },
        { value: "10:00", id: 2 },
        { value: "11:00", id: 3 },
        { value: "12:00", id: 4 },
        { value: "13:00", id: 5 },
        { value: "14:00", id: 6 },
        { value: "15:00", id: 7 },
        { value: "16:00", id: 8 },
        { value: "17:00", id: 9 },
      ],
    };
  },
  created() {
    this.GET_RATE_FROM_API();
  },
  computed: {
    //SELECTED
    ...mapState({
      selectedCar: (state) => state.selectedCar,
      selectedColor: (state) => state.selectedColor,
      selectedDateFrom: (state) => state.selectedDateFrom,
      selectedDateTo: (state) => state.selectedDateTo,
      selectedTimeTo: (state) => state.selectedTimeTo,
      dateStateFrom: (state) => state.dateFrom,
      dateStateTo: (state) => state.dateTo,
      selectedRate: (state) => state.selectedRate,
      selectedTank: (state) => state.selectedTank,
      selectedBabyChair: (state) => state.selectedBabyChair,
      selectedRightHandDrive: (state) => state.selectedRightHandDrive,
    }),
    ...mapGetters(["RATELIST"]),
    //TO DO удалить дубли цветов из полученного массива цветов
    getCarColors() {
      if (this.selectedCar?.colors) {
        return this.selectedCar.colors;
      }
      return this.selectedCar.colors;
    },
    checkedColor: {
      get() {
        return this.selectedColor;
      },
      set(checkedColorCar) {
        this.$store.commit("SET_SELECTEDCOLOR", checkedColorCar);
      },
    },
    checkedRate: {
      get() {
        return this.selectedRate;
      },
      set(checkedRateCar) {
        this.$store.commit("SET_SELECTEDRATE", checkedRateCar);
      },
    },
    checkedTank: {
      get() {
        return this.selectedTank;
      },
      set(checkedTankCar) {
        this.$store.commit("SET_SELECTEDTANK", checkedTankCar);
      },
    },
    checkedBabyChair: {
      get() {
        return this.selectedBabyChair;
      },
      set(checkedBabyChairCar) {
        this.$store.commit("SET_SELECTEDBABYCHAIR", checkedBabyChairCar);
      },
    },
    checkedRightHandDrive: {
      get() {
        return this.selectedRightHandDrive;
      },
      set(checkedRightHandDriveCar) {
        this.$store.commit("SET_SELECTEDBABYCHAIR", checkedRightHandDriveCar);
      },
    },
  },
  methods: {
    ...mapActions(["GET_RATE_FROM_API"]),
    //SELECTED COLOR
    setSelectedColor(checkedColorCar) {
      this.$store.commit("SET_SELECTEDCOLOR", checkedColorCar);
    },
    //TO DO сброс выбранного
    resetSelectedColor() {
      this.$store.commit("RESET_SELECTEDCOLOR");
    },
    //SELECTED DATE FROM
    setSelectedDateFrom(chosenDateFrom) {
      this.$store.commit("SET_SELECTEDDATEFROM", chosenDateFrom.value);
    },
    resetSelectedDateFrom() {
      this.$store.commit("RESET_SELECTEDDATEFROM");
      this.$store.commit("RESET_SELECTEDDATETO");
      this.$store.commit("RESET_SELECTEDTIMETO");
      this.$store.commit("RESET_RENTALDURATION");
    },
    //SELECTED DATE TO
    setSelectedDateTo(chosenDateTo) {
      this.$store.commit("SET_SELECTEDDATETO", chosenDateTo.value);
    },
    resetSelectedDateTo() {
      this.$store.commit("RESET_SELECTEDDATETO");
      this.$store.commit("RESET_SELECTEDTIMETO");
      this.$store.commit("RESET_RENTALDURATION");
    },
    setSelectedTimeTo(chosenTimeTo) {
      this.$store.commit("SET_SELECTEDTIMETO", chosenTimeTo.value);
      this.$store.commit("SET_RENTALDURATION");
    },
    resetSelectedTimeTo() {
      this.$store.commit("RESET_SELECTEDTIMETO");
      this.$store.commit("RESET_RENTALDURATION");
    },
    resetSelectedTo() {
      this.$store.commit("RESET_SELECTEDDATETO");
      this.$store.commit("RESET_SELECTEDTIMETO");
      this.$store.commit("RESET_RENTALDURATION");
    },
    //SELECTED RATE
    setSelectedRate(checkedRate) {
      this.$store.commit("SET_SELECTEDRATE", checkedRate);
    },
    resetSelectedRate() {
      this.$store.commit("RESET_SELECTEDRATE");
    },
    //SELECTED TANK
    setSelectedTank(checkedTank) {
      this.$store.commit("SET_SELECTEDTANK", checkedTank);
    },
    resetSelectedTank() {
      this.$store.commit("RESET_SELECTEDTANK");
    },
    //SELECTED BABY CHAIR
    setSelectedBabyChair(checkedBabyChair) {
      this.$store.commit("SET_SELECTEDBABYCHAIR", checkedBabyChair);
    },
    resetSelectedBabyChair() {
      this.$store.commit("RESET_SELECTEDBABYCHAIR");
    },
    //SELECTED RIGHT HAND DRIVE
    setSelectedRightHandDrive(checkedRightHandDrive) {
      this.$store.commit("SET_SELECTEDRIGHTHANDDRIVE", checkedRightHandDrive);
    },
    resetSelectedRightHandDrive() {
      this.$store.commit("RESET_SELECTEDRIGHTHANDDRIVE");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.additional-wrp {
  overflow: scroll;
  height: 40vh;
}

.radio-list {
  display: flex;
  margin-bottom: 30px;
}

.additional__text {
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color;
  margin-top: 0;
}

.additional-input__wrp {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: fit-content;
}

.additional-input__wrp,
.tarif-wrp {
  // text-align: right;
  margin-bottom: 30px;
}

.tarif__radiobutton {
  margin-bottom: 12px;
}
</style>
