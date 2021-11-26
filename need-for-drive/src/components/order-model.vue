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
      <div class="radio__item">
        <input
          class="radio__input"
          type="radio"
          name="auto"
          v-model="checkedCategoryCars"
          value="5fd91add935d4e0be16a3c4b"
        />
        <label for="auto">Спорт</label>
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
    <!-- <ul class="cars-list">
      <li class="cars__item" v-for="car in filteredCars" :key="car.id">
        <CarsRadio :car="car" v-model="MySelectedValue" />
      </li>
    </ul> -->
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
// import CarsRadio from "@/components/cars-radio.vue";
// import { mapState } from "vuex"; //LOCAL
import { mapActions, mapGetters } from "vuex"; //API

export default {
  name: "order-model",
  components: {
    // BaseRadio,
    // CarsRadio,
  },
  data() {
    return {
      // radioButtons: ["Все модели", "Эконом", "Премиум"],
      checkedCategoryCars: null,
      // MySelectedValue: null,
    };
  },
  created() {
    //API
    this.GET_CARLIST_FROM_API();
  },
  computed: {
    //API
    ...mapGetters(["CARLIST"]),

    // filteredCars() {
    //   if (!this.checkedCategoryCars) {
    //     return this.CARLIST;
    //   } else {
    //     return this.CARLIST.filter((car) => {
    //       if (car?.categoryId?.id) {
    //         car.categoryId.id.includes(this.checkedCategoryCars);
    //       }
    //     });
    //   }
    // },

    filteredCars() {
      const result = [];
      const length = this.CARLIST.length;

      if (!this.checkedCategoryCars) {
        return this.CARLIST;
      } else {
        for (var i = 0; i < length; i++) {
          if (
            this.CARLIST[i]?.categoryId?.id.indexOf(this.checkedCategoryCars) !=
            -1
          ) {
            result.push(this.CARLIST[i]);
          }
        }
        return result;
      }
    },
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
