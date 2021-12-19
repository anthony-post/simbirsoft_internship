<template>
  <div>
    <div class="radio-list">
      <VRadio
        label="Все модели"
        v-model="checkedCategoryCars"
        @change="resetSelectedCategoryCar"
      />
      <VRadio
        label="Эконом"
        value="600598a3ad015e0bb699774c"
        v-model="checkedCategoryCars"
        @change="setSelectedCategoryCar"
      />
      <VRadio
        label="Премиум"
        value="60b943492aed9a0b9b7ed335"
        v-model="checkedCategoryCars"
        @change="setSelectedCategoryCar"
      />
      <VRadio
        label="Спорт"
        value="5fd91add935d4e0be16a3c4b"
        v-model="checkedCategoryCars"
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
import { mapActions, mapGetters } from "vuex"; //API

export default {
  name: "order-model",
  components: {
    VRadio,
  },
  data() {
    return {
      // checkedCategoryCars: "",
      // selectedModelId: null,
    };
  },
  created() {
    //API
    this.GET_CARLIST_FROM_API();
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

    // filteredCars() {
    //   const result = [];
    //   const length = this.CARLIST.length;

    //   if (!this.checkedCategoryCars) {
    //     return this.CARLIST;
    //   } else {
    //     for (var i = 0; i < length; i++) {
    //       if (
    //         this.CARLIST[i]?.categoryId?.id.indexOf(this.checkedCategoryCars) !=
    //         -1
    //       ) {
    //         result.push(this.CARLIST[i]);
    //       }
    //     }
    //     return result;
    //   }
    // },
  },
  methods: {
    //API
    ...mapActions(["GET_CARLIST_FROM_API"]),
    //TO DO последовательную загрузку по мере скроллинга

    setSelectedCar(chosenCar) {
      // this.selectedModelId = chosenCar.id;
      this.$store.commit("SET_SELECTEDCAR", chosenCar);
    },
    //TO DO сброс выбранного авто
    // resetSelectedCar() {
    //   this.$store.commit("RESET_SELECTEDCAR");
    // },
    setSelectedCategoryCar(chosenCategoryCar) {
      this.$store.commit("SET_CHECKEDCATEGORYCAR", chosenCategoryCar);
    },
    resetSelectedCategoryCar() {
      this.$store.commit("RESET_CHECKEDCATEGORYCAR");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.radio-list {
  display: flex;
}

.cars-list {
  margin: 0;
  padding: 48px 0 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
</style>
