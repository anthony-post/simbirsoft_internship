<template>
  <div class="wrapper">
    <div class="sidebar">
      <Slide width="1000">
        <a id="home" href="#">
          <span>Парковка</span>
        </a>
        <a id="home" href="#">
          <span>Страховка</span>
        </a>
        <a id="home" href="#">
          <span>Бензин</span>
        </a>
        <a id="home" href="#">
          <span>Обслуживание</span>
        </a>
      </Slide>
      <button class="sidebar-button">Eng</button>
    </div>
    <div class="left-wrp">
      <header class="header">
        <p class="logo">Need for drive</p>
        <p class="map-icon">Ульяновск</p>
      </header>
      <div class="about">
        <h1 class="title">Каршеринг</h1>
        <p class="title title-text">Need for drive</p>
        <p class="text">Поминутная аренда авто твоего города</p>
        <button class="button">Забронировать</button>
      </div>
      <footer class="footer">
        <p class="copyright">&#169; 2016-2019 «Need for drive»</p>
        <p class="phone">8 (495) 234-22-44</p>
      </footer>
    </div>
    <div class="right-wrp">
      <slider height="100%" animation="normal">
        <slider-item
          v-for="(i, index) in list"
          :key="index"
          :style="i"
          @click="hello"
        >
          <!-- <p style="line-height: 280px; font-size: 5rem; text-align: center">
            Page{{ index + 1 }}
          </p> -->
          <div class="slider-about">
            <p class="slider-title">
              {{ i.title }}
            </p>
            <p class="slider-text">
              {{ i.text }}
            </p>
            <button class="slider-button">Подробнее</button>
          </div>
        </slider-item>
      </slider>
    </div>
  </div>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";
import { Slide } from "vue-burger-menu";

export default {
  name: "About",
  components: {
    Slider,
    SliderItem,
    Slide,
  },
  data() {
    return {
      list: [
        {
          backgroundImage: `url(${require("../assets/slide_parking.jpg")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          title: "Бесплатная парковка",
          text: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
        },
        {
          backgroundImage: `url(${require("../assets/slide_insurance.jpg")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          title: "Страховка",
          text: "Полная страховка страховка автомобиля",
        },
        {
          backgroundImage: `url(${require("../assets/slide_petrol.jpg")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          title: "Бензин",
          text: "Полный бак на любой заправке города за наш счёт",
        },
        {
          backgroundImage: `url(${require("../assets/slide_service.jpg")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          title: "Обслуживание",
          text: "Автомобиль проходит еженедельное ТО",
        },
      ],
    };
  },
  methods: {
    hello($event) {
      console.log(`hello index: ${$event}`);
    },
  },
};
</script>

<style lang="scss">
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 16px;
  top: 32px;
  cursor: pointer;
}
</style>
