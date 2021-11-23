<template>
  <div>
    <div class="radio-list">
      <!-- <ul>
        <li
          class="radio__item"
          v-for="(radio, index) in radioButtons"
          :key="index"
        >
          <input
            class="radio__input"
            type="radio"
            name="cars"
            v-model="checkedCategoryCars"
            :value="car.category"
          />
          <label for="cars">{{ radio }}</label>
        </li>
      </ul> -->

      <div class="radio__item">
        <input
          class="radio__input"
          type="radio"
          name="auto"
          v-model="checkedCategoryCars"
        />
        <label for="auto">Все модели</label>
      </div>
      <div class="radio__item">
        <input
          class="radio__input"
          type="radio"
          name="auto"
          v-model="checkedCategoryCars"
          value="600598a3ad015e0bb699774c"
        />
        <label for="auto">Эконом</label>
      </div>
      <div class="radio__item">
        <input
          class="radio__input"
          type="radio"
          name="auto"
          v-model="checkedCategoryCars"
          value="60b943492aed9a0b9b7ed335"
        />
        <label for="auto">Премиум</label>
      </div>

      <!-- <BaseRadio
        v-model="checkedCategoryCars"
        :value="cars.category"
        label="Все модели"
      />
      <BaseRadio v-model="checkedCategoryCars" value="Econom" label="Эконом" />
      <BaseRadio
        v-model="checkedCategoryCars"
        value="Premium"
        label="Премиум"
      /> -->

      <!-- <BaseRadio
        v-model="checkedCategoryCars"
        value="Premium"
        label="Премиум"
        name="cars"
      />
      <BaseRadio
        v-model="checkedCategoryCars"
        value="Econom"
        label="Эконом"
        name="cars"
      /> -->
    </div>
    <ul class="cars-list">
      <li class="cars__item" v-for="car in filteredCars" :key="car.id">
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
// import BaseRadio from "@/components/base-radio.vue";
// import { mapState } from "vuex"; //LOCAL
import { mapActions, mapGetters } from "vuex"; //API

export default {
  name: "order-model",
  components: {
    // BaseRadio,
  },
  data() {
    return {
      // radioButtons: ["Все модели", "Эконом", "Премиум"],
      // cars: [
      //   {
      //     id: "1",
      //     thumbnail: {
      //       originalname: "auto picture",
      //       path: require("../assets/car_elantra.jpg"),
      //     },
      //     name: "ELANTRA",
      //     priceMin: "12 000",
      //     priceMax: "25 000",
      //     categoryId: "Econom",
      //   },
      //   {
      //     id: "2",
      //     thumbnail: {
      //       originalname: "auto picture",
      //       path: require("../assets/car_i30n.jpg"),
      //     },
      //     name: "i30 N",
      //     priceMin: "18 000",
      //     priceMax: "32 000",
      //     categoryId: "Premium",
      //   },
      //   {
      //     id: "3",
      //     thumbnail: {
      //       originalname: "auto picture",
      //       path: require("../assets/car_creta.jpg"),
      //     },
      //     name: "CRETA",
      //     priceMin: "12 000",
      //     priceMax: "25 000",
      //     categoryId: "Econom",
      //   },
      //   {
      //     id: "4",
      //     thumbnail: {
      //       originalname: "auto picture",
      //       path: require("../assets/car_sonata.jpg"),
      //     },
      //     name: "SONATA",
      //     priceMin: "18 000",
      //     priceMax: "32 000",
      //     categoryId: null,
      //   },
      //   {
      //     id: "5",
      //     thumbnail: {
      //       originalname: "auto picture",
      //       path: require("../assets/car_elantra.jpg"),
      //     },
      //     name: "ELANTRA",
      //     priceMin: "12 000",
      //     priceMax: "25 000",
      //     categoryId: "Econom",
      //   },
      //   {
      //     id: "6",
      //     thumbnail: {
      //       originalname: "auto picture",
      //       path: require("../assets/car_i30n.jpg"),
      //     },
      //     name: "i30 N",
      //     priceMin: "18 000",
      //     priceMax: "32 000",
      //     categoryId: null,
      //   },
      // ],
      checkedCategoryCars: null,
    };
  },
  created() {
    //API
    this.GET_CARLIST_FROM_API();
  },
  computed: {
    //API
    ...mapGetters(["CARLIST"]),

    filteredCars() {
      if (!this.checkedCategoryCars) {
        return this.CARLIST;
      } else {
        return this.CARLIST.filter((car) => {
          if (car?.categoryId?.id) {
            car.categoryId.id.includes(this.checkedCategoryCars);
          }
        });
      }
    },

    //LOCAL
    // filteredCars() {
    //   if (!this.checkedCategoryCars) {
    //     return this.cars;
    //   } else {
    //     return this.cars.filter((car) => {
    //       if (this.cars && this.cars.categoryId)
    //         car.categoryId.includes(this.checkedCategoryCars);
    //     });
    // }
    // },
  },
  methods: {
    //API
    ...mapActions(["GET_CARLIST_FROM_API"]),
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.radio-list {
  display: flex;
}

.radio__item {
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color-grey;
  margin-right: 10px;
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

.cars__item:active {
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
  // margin-left: 50px;
  // overflow: hidden;
  max-width: 100%;
}
</style>
