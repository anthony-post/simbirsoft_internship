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
            :value="cars.category"
          />
          <label for="cars">{{ radio }}</label>
        </li>
      </ul> -->

      <div class="radio__item">
        <input
          class="radio__input"
          type="radio"
          name="cars"
          checked
          v-model="checkedCategoryCars"
          :value="cars.category"
        />
        <label for="cars">Все модели</label>
      </div>
      <div class="radio__item">
        <input
          class="radio__input"
          type="radio"
          name="cars"
          v-model="checkedCategoryCars"
          value="Econom"
        />
        <label for="cars">Эконом</label>
      </div>
      <div class="radio__item">
        <input
          class="radio__input"
          type="radio"
          name="cars"
          v-model="checkedCategoryCars"
          value="Premium"
        />
        <label for="cars">Премиум</label>
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
    </div>
    <ul class="cars-list">
      <li class="cars__item" v-for="car in filteredCars" :key="car.id">
        <p class="cars__model">{{ car.model }}</p>
        <p class="cars__price">{{ car.pricemin }} - {{ car.pricemin }}</p>
        <img :src="car.img" alt="автомобиль" />
      </li>
    </ul>
  </div>
</template>

<script>
// import BaseRadio from "@/components/base-radio.vue";

export default {
  name: "order-model",
  components: {
    // BaseRadio,
  },
  data() {
    return {
      // radioButtons: ["Все модели", "Эконом", "Премиум"],
      cars: [
        {
          id: "1",
          img: require("../assets/car_elantra.jpg"),
          model: "ELANTRA",
          pricemin: "12 000",
          pricemax: "25 000",
          category: "Econom",
        },
        {
          id: "2",
          img: require("../assets/car_i30n.jpg"),
          model: "i30 N",
          pricemin: "18 000",
          pricemax: "32 000",
          category: "Premium",
        },
        {
          id: "3",
          img: require("../assets/car_creta.jpg"),
          model: "CRETA",
          pricemin: "12 000",
          pricemax: "25 000",
          category: "Econom",
        },
        {
          id: "4",
          img: require("../assets/car_sonata.jpg"),
          model: "SONATA",
          pricemin: "18 000",
          pricemax: "32 000",
          category: "Premium",
        },
        {
          id: "5",
          img: require("../assets/car_elantra.jpg"),
          model: "ELANTRA",
          pricemin: "12 000",
          pricemax: "25 000",
          category: "Econom",
        },
        {
          id: "6",
          img: require("../assets/car_i30n.jpg"),
          model: "i30 N",
          pricemin: "18 000",
          pricemax: "32 000",
          category: "Premium",
        },
      ],
      checkedCategoryCars: null,
    };
  },
  computed: {
    filteredCars() {
      if (!this.checkedCategoryCars) {
        return this.cars;
      } else {
        return this.cars.filter((car) =>
          car.category.includes(this.checkedCategoryCars)
        );
      }
    },
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

// .radio__input {
//     border: $color-text;
// }

.cars-list {
  margin: 0;
  padding: 48px 0 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.cars__item {
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
  margin-left: 50px;
  overflow: hidden;
}
</style>
