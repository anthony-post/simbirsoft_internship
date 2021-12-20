<!--TO DO-->
<template>
  <div>
    <p class="additional__text">Цвета</p>
    <div class="radio-list">
      <VRadio
        label="Любой"
        v-model="selectedColor"
        @change="resetSelectedColor"
      />
      <VRadio
        v-for="color in getCarColors"
        :key="color"
        :label="color"
        :value="color"
        v-model="selectedColor"
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
          :selected="selectedFrom"
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
          :selected="selectedDate"
          :selected2="selectedTime"
          pretext="По"
        />
      </p>
    </div>
    <p class="additional__text">Тариф</p>
    <div class="tarif-wrp">
      <VRadio
        class="tarif__radiobutton"
        label="Поминутно, 7Р/мин"
        value="Поминутно"
        v-model="selectedRate"
        @change="setSelectedRate"
      />
      <VRadio
        class="tarif__radiobutton"
        label="На сутки, 1999Р/сутки"
        value="На сутки"
        v-model="selectedRate"
        @change="setSelectedRate"
      />
    </div>
    <p class="additional__text">Доп услуги</p>
    <div class="services-wrp">
      <!--TO DO checkbox-->
      <VCheckbox
        label="Полный бак, 500р"
        value="Да"
        v-model="selectedTank"
        @change="setSelectedTank"
      />
      <VCheckbox
        label="Детское кресло, 200р"
        value="Да"
        v-model="selectedBabyChair"
        @change="setSelectedBabyChair"
      />
      <VCheckbox
        label="Правый руль, 1600р"
        value="Да"
        v-model="selectedRightHandDrive"
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
      selectedFrom: "Введите дату и время...",
      dateFrom: [
        { value: "01.12.2021 9:00", id: 1 },
        { value: "01.12.2021 10:00", id: 2 },
        { value: "01.12.2021 11:00", id: 3 },
      ],
      // selectedTo: "Введите дату и время...",
      // dateTo: [
      //   { value: "02.12.2021 9:00", id: 1 },
      //   { value: "02.12.2021 10:00", id: 2 },
      //   { value: "02.12.2021 11:00", id: 3 },
      // ],
      selectedDate: "Введите дату/время",
      dateTo: [
        { value: "01.12.2021", id: 1 },
        { value: "02.12.2021", id: 2 },
        { value: "03.12.2021", id: 3 },
        { value: "04.12.2021", id: 4 },
        { value: "05.12.2021", id: 5 },
      ],
      selectedTime: "",
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
    }),
    //TO DO удалить дубли цветов из полученного массива цветов
    getCarColors() {
      if (this.selectedCar?.colors) {
        return this.selectedCar.colors;
      }
      return this.selectedCar.colors;
    },
  },
  methods: {
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
      this.selectedFrom = chosenDateFrom.value;
      this.$store.commit("SET_SELECTEDDATEFROM", chosenDateFrom.value);
    },
    resetSelectedDateFrom() {
      this.selectedFrom = "Введите дату и время...";
      this.$store.commit("RESET_SELECTEDDATEFROM");
    },
    //SELECTED DATE TO
    setSelectedDateTo(chosenDateTo) {
      this.selectedDate = chosenDateTo.value;
      this.$store.commit("SET_SELECTEDDATETO", chosenDateTo.value);
    },
    resetSelectedDateTo() {
      this.selectedDate = "Введите дату/время";
      this.$store.commit("RESET_SELECTEDDATETO");
    },
    setSelectedTimeTo(chosenTimeTo) {
      this.selectedTime = chosenTimeTo.value;
      this.$store.commit("SET_SELECTEDTIMETO", chosenTimeTo.value);
    },
    resetSelectedTimeTo() {
      this.selectedTime = "";
      this.$store.commit("RESET_SELECTEDTIMETO");
    },
    resetSelectedTo() {
      this.selectedDate = "Введите дату/время";
      this.$store.commit("RESET_SELECTEDDATETO");
      this.selectedTime = "";
      this.$store.commit("RESET_SELECTEDTIMETO");
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

.additional-input__wrp,
.tarif-wrp {
  // text-align: right;
  margin-bottom: 30px;
}

.tarif__radiobutton {
  margin-bottom: 12px;
}
</style>
