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
        <button class="slider-button" v-if="slide.id === 1">Подробнее</button>
        <button
          class="slider-button"
          v-if="slide.id === 2"
          :class="{ button_insurance: slide.id === 2 }"
        >
          Подробнее
        </button>
        <button
          class="slider-button"
          v-if="slide.id === 3"
          :class="{ button_petrol: slide.id === 3 }"
        >
          Подробнее
        </button>
        <button
          class="slider-button"
          v-if="slide.id === 4"
          :class="{ button_service: slide.id === 4 }"
        >
          Подробнее
        </button>
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
          id: 1,
        },
        {
          ...BASE_SLIDER_ITEM,
          backgroundImage: `url(${require("../assets/slide_insurance.jpg")})`,
          title: "Страховка",
          text: "Полная страховка страховка автомобиля",
          id: 2,
        },
        {
          ...BASE_SLIDER_ITEM,
          backgroundImage: `url(${require("../assets/slide_petrol.jpg")})`,
          title: "Бензин",
          text: "Полный бак на любой заправке города за наш счёт",
          id: 3,
        },
        {
          ...BASE_SLIDER_ITEM,
          backgroundImage: `url(${require("../assets/slide_service.jpg")})`,
          title: "Обслуживание",
          text: "Автомобиль проходит еженедельное ТО",
          id: 4,
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

.button_insurance {
  background: linear-gradient(90deg, #132949 0%, #0c7b67 100%);
}

.button_petrol {
  background: linear-gradient(90deg, #493013 0%, #7b0c3b 100%);
}

.button_service {
  background: linear-gradient(90deg, #281349 0%, #720c7b 100%);
}
</style>
