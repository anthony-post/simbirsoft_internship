<template>
  <div>
    <div class="radio-list">
      <VRadio
        label="Все модели"
        v-model="categoryCars"
        @change="resetSelectedCategoryCar"
      />
      <VRadio
        v-for="category in categories"
        :key="category.id"
        :label="category.name"
        :value="category.id"
        v-model="categoryCars"
        @change="setSelectedCategoryCar"
      />
    </div>
    <ul class="cars-list">
      <li
        class="cars__item"
        v-for="car in filteredCars"
        :key="car.id"
        :class="{ cars__item_active: selectedCar.id === car.id }"
        @click="setSelectedCar(car)"
      >
        <p class="cars__model">{{ car.name }}</p>
        <p class="cars__price">{{ car.priceMin }} - {{ car.priceMax }} руб.</p>
        <img
          loading="lazy"
          class="cars__img"
          :src="car.thumbnail.path"
          :alt="car.thumbnail.originalname"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import VRadio from "@/components/v-radio.vue";
import { mapState } from "vuex"; //SELECTED
import { mapGetters } from "vuex";

export default {
  name: "order-model",
  components: {
    VRadio,
  },
  data() {
    return {
      categories: [
        { id: "600598a3ad015e0bb699774c", name: "Эконом" },
        { id: "60b943492aed9a0b9b7ed335", name: "Премиум" },
        { id: "5fd91add935d4e0be16a3c4b", name: "Спорт" },
      ],
    };
  },
  computed: {
    //SELECTED
    ...mapState({
      selectedCar: (state) => state.selectedCar,
      checkedCategoryCars: (state) => state.checkedCategoryCars,
    }),
    //API
    ...mapGetters(["CARLIST"]),

    filteredCars() {
      if (!this.checkedCategoryCars) {
        return this.CARLIST;
      } else {
        return this.CARLIST.filter((car) => {
          if (car?.categoryId?.id) {
            return car.categoryId.id.includes(this.checkedCategoryCars);
          }
        });
      }
    },
    categoryCars: {
      get: function () {
        return this.checkedCategoryCars;
      },
      set: function (chosenCategoryCar) {
        this.$store.commit("SET_CHECKEDCATEGORYCAR", chosenCategoryCar);
      },
    },
  },
  methods: {
    setSelectedCar(chosenCar) {
      this.$store.commit("SET_SELECTEDCAR", chosenCar);
    },
    setSelectedCategoryCar(chosenCategoryCar) {
      this.$store.commit("SET_CHECKEDCATEGORYCAR", chosenCategoryCar);
    },
    resetSelectedCategoryCar() {
      this.$store.commit("RESET_CHECKEDCATEGORYCAR");
      this.$store.commit("RESET_SELECTEDCAR");
      this.$store.commit("RESET_SELECTEDCOLOR");
      this.$store.commit("RESET_SELECTEDDATEFROM");
      this.$store.commit("RESET_SELECTEDDATETO");
      this.$store.commit("RESET_SELECTEDTIMETO");
      this.$store.commit("RESET_RENTALDURATION");
      this.$store.commit("RESET_SELECTEDRATE");
      this.$store.commit("RESET_SELECTEDTANK");
      this.$store.commit("RESET_SELECTEDBABYCHAIR");
      this.$store.commit("RESET_SELECTEDRIGHTHANDDRIVE");
      this.$emit("on-tab-reset", "order-model");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.radio-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.cars-list {
  margin: 0;
  padding: 48px 0 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: scroll;
  height: calc(100vh - 274px);
}

.cars__item {
  width: 370px;
  list-style: none;
  border: 1px solid $color-grey-light;
  box-sizing: border-box;
  padding: 16px;
}

.cars__item:hover {
  border: 1px solid $color-grey;
}

.cars__item_active {
  border: 1px solid $color-text;
}

.cars__model {
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: $color;
  margin: 0;
}

.cars__price {
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: $color-grey;
  margin: 0;
}

.cars__img {
  max-width: 100%;
}

@media #{$media} and (min-width: 320px) and (max-width: 767px) {
  .cars-list {
    overflow: scroll;
    height: 40vh;
  }

  .cars__item {
    width: 285px;
  }
}
</style>
