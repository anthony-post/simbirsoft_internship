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
          :options="arrayDateFrom"
          @select="setSelectedDateFrom"
          @reset="resetSelectedDateFrom"
          :selected="selectedDateFrom"
          pretext="C"
        />
      </p>
      <p>
        <!--альтернативный вариант выбора даты и время-->
        <VSelectDouble
          :options="arrayDate"
          :options2="arrayTime"
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
import VSelectDouble from "@/components/v-selectdouble.vue";
import VCheckbox from "@/components/v-checkbox.vue";
import { mapState } from "vuex"; //SELECTED
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "order-additional",
  components: {
    VRadio,
    VSelect,
    VSelectDouble,
    VCheckbox,
  },
  data() {
    return {
      arrayDateFrom: [],
      arrayDate: [],
      arrayTime: [],
    };
  },
  created() {
    //генерация массива с объектами дат
    const dateObj = new Date();
    dateObj.setHours(0, 0, 0);
    for (let i = 0; i < 30; i++) {
      dateObj.setDate(dateObj.getDate() + 1);
      let newDate = this.formatedDate(dateObj);

      let dateFromString = newDate + " " + "00:00";
      let newObjDateFrom = {
        id: i,
        value: dateObj.getTime(),
        dateString: dateFromString,
      };
      this.arrayDateFrom.push(newObjDateFrom);

      let newObjDate = { id: i, value: dateObj.getTime(), dateString: newDate };
      this.arrayDate.push(newObjDate);
    }
    //генерация массива с объектами времени
    const time = [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ];
    for (let j = 0; j < time.length; j++) {
      let time_parts = time[j].split(":");
      let millisecond = time_parts[0] * (60000 * 60) + time_parts[1] * 60000;
      let newObjTime = { id: j, value: millisecond, dateString: time[j] };
      this.arrayTime.push(newObjTime);
    }
    //получение списка доступных тарифов
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
        this.$store.commit(
          "SET_SELECTEDRIGHTHANDDRIVE",
          checkedRightHandDriveCar
        );
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
    //FORMATED DATE
    formatedDate(dateObj) {
      let date =
        dateObj.getDate().toString().length < 2
          ? "0" + dateObj.getDate()
          : dateObj.getDate();
      let month =
        dateObj.getMonth().toString().length < 2
          ? "0" + (dateObj.getMonth() + 1)
          : dateObj.getMonth() + 1;
      let year = dateObj.getFullYear().toString();

      return `${date}.${month}.${year}`;
    },
    //SELECTED DATE FROM
    setSelectedDateFrom(chosenDateFrom) {
      // this.$store.commit("SET_SELECTEDDATEFROM", chosenDateFrom.value);
      this.$store.commit("SET_SELECTEDDATEFROM", chosenDateFrom);
    },
    resetSelectedDateFrom() {
      this.$store.commit("RESET_SELECTEDDATEFROM");
      this.$store.commit("RESET_SELECTEDDATETO");
      this.$store.commit("RESET_SELECTEDTIMETO");
      this.$store.commit("RESET_RENTALDURATION");
      this.$store.commit("RESET_SELECTEDRATE");
      this.$store.commit("RESET_SELECTEDTANK");
      this.$store.commit("RESET_SELECTEDBABYCHAIR");
      this.$store.commit("RESET_SELECTEDRIGHTHANDDRIVE");
      this.$emit("on-tab-reset", "order-additional");
    },
    //SELECTED DATE TO
    setSelectedDateTo(chosenDateTo) {
      // this.$store.commit("SET_SELECTEDDATETO", chosenDateTo.value);
      this.$store.commit("SET_SELECTEDDATETO", chosenDateTo);
      this.$store.commit("SET_RENTALDURATION");
    },
    resetSelectedDateTo() {
      this.$store.commit("RESET_SELECTEDDATETO");
      this.$store.commit("RESET_SELECTEDTIMETO");
      this.$store.commit("RESET_RENTALDURATION");
    },
    setSelectedTimeTo(chosenTimeTo) {
      // this.$store.commit("SET_SELECTEDTIMETO", chosenTimeTo.value);
      this.$store.commit("SET_SELECTEDTIMETO", chosenTimeTo);
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
      this.$store.commit("RESET_SELECTEDRATE");
      this.$store.commit("RESET_SELECTEDTANK");
      this.$store.commit("RESET_SELECTEDBABYCHAIR");
      this.$store.commit("RESET_SELECTEDRIGHTHANDDRIVE");
      this.$emit("on-tab-reset", "order-additional");
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

.additional-input__wrp {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: fit-content;
}

.additional-input__wrp:first-child p {
  margin: 0;
}

.additional-input__wrp,
.tarif-wrp {
  margin-bottom: 30px;
}

.tarif__radiobutton {
  margin-bottom: 12px;
}

@media #{$media} and (min-width: 320px) and (max-width: 767px) {
  .additional-wrp {
    overflow: scroll;
    height: 40vh;
  }
}
</style>
