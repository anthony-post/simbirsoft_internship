<template>
  <slider height="100%" animation="normal">
    <slider-item
      v-for="(slide, index) in sliderList"
      :key="index"
      :style="slide"
    >
      <div class="slider-about">
        <p class="slider-title">
          {{ slide.title }}
        </p>
        <p class="slider-text">
          {{ slide.text }}
        </p>
        <button class="slider-button">Подробнее</button>
      </div>
    </slider-item>
  </slider>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";

const BASE_SLIDER_ITEM = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

export default {
  name: "v-slider",
  components: {
    Slider,
    SliderItem,
  },
  data() {
    return {
      sliderList: [
        {
          ...BASE_SLIDER_ITEM,
          backgroundImage: `url(${require("../assets/slide_parking.jpg")})`,
          title: "Бесплатная парковка",
          text: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
        },
        {
          ...BASE_SLIDER_ITEM,
          backgroundImage: `url(${require("../assets/slide_insurance.jpg")})`,
          title: "Страховка",
          text: "Полная страховка страховка автомобиля",
        },
        {
          ...BASE_SLIDER_ITEM,
          backgroundImage: `url(${require("../assets/slide_petrol.jpg")})`,
          title: "Бензин",
          text: "Полный бак на любой заправке города за наш счёт",
        },
        {
          ...BASE_SLIDER_ITEM,
          backgroundImage: `url(${require("../assets/slide_service.jpg")})`,
          title: "Обслуживание",
          text: "Автомобиль проходит еженедельное ТО",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.slider-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.slider-about {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 96px 0 96px;
}

.slider-title {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  color: #ffffff;
  margin: 0;
}

.slider-text {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 100%;
  color: #ffffff;
}

.slider-button {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #eeeeee;
  background: linear-gradient(90deg, #13493f 0%, #0c7b1b 100%);
  border-radius: 4px;
  border: none;
  padding: 1em 2em;
  cursor: pointer;
}
</style>
