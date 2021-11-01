<!--TO DO-->
<template>
  <div>
    <div class="radio-list">
      <BaseRadio label="Все модели" />
      <BaseRadio label="Эконом" />
      <BaseRadio label="Премиум" />
    </div>
    <ul class="cars-list">
      <li class="cars__item" v-for="car in cars" :key="car.id">
        <p class="cars__model">{{ car.model }}</p>
        <p class="cars__price">{{ car.pricemin }} - {{ car.pricemin }}</p>
        <!-- <img :src="car.img" alt="автомобиль" /> -->
        <img
          class="cars__img"
          src="../assets/car_elantra.jpg"
          alt="автомобиль"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import BaseRadio from "@/components/base-radio.vue";

export default {
  name: "order-model",
  components: {
    BaseRadio,
  },
  data() {
    return {
      cars: [
        {
          id: "1",
          img: "../assets/car_elantra.jpg",
          model: "ELANTRA",
          pricemin: "12 000",
          pricemax: "25 000",
        },
        {
          id: "2",
          img: "../assets/car_i30n.jpg",
          model: "i30 N",
          pricemin: "18 000",
          pricemax: "32 000",
        },
        {
          id: "3",
          img: "../assets/car_creta.jpg",
          model: "CRETA",
          pricemin: "12 000",
          pricemax: "25 000",
        },
        {
          id: "4",
          img: "../assets/car_sonata.jpg",
          model: "SONATA",
          pricemin: "18 000",
          pricemax: "32 000",
        },
        {
          id: "5",
          img: "../assets/car_elantra.jpg",
          model: "ELANTRA",
          pricemin: "12 000",
          pricemax: "25 000",
        },
        {
          id: "6",
          img: "../assets/car_i30n.jpg",
          model: "i30 N",
          pricemin: "18 000",
          pricemax: "32 000",
        },
      ],
    };
  },
};
</script>
