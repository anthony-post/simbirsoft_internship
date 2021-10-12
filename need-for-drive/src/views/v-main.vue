<template>
  <div class="wrapper">
    <div class="sidebar">
      <slide width="2000">
        <a
          v-for="(bmMenuItem, index) in bmMenuList"
          :key="index"
          id="home"
          :href="bmMenuItem.href"
        >
          <span>{{ bmMenuItem.title }}</span>
        </a>
        <div>
          <a class="socialicons" href="#"
            ><vicon icon-id="icon-telegram" width="32" height="32"
          /></a>
          <a class="socialicons" href="#"
            ><vicon icon-id="icon-facebook" width="32" height="32"
          /></a>
          <a class="socialicons" href="#"
            ><vicon icon-id="icon-instagram" width="32" height="32"
          /></a>
        </div>
      </slide>
      <button class="sidebar__button">Eng</button>
    </div>
    <div class="left-wrp">
      <header class="header">
        <p class="header__logo">Need for drive</p>
        <p class="header__map">
          <vicon
            class="header__icon"
            icon-id="icon-map"
            width="20"
            height="20"
          />
          <a class="header__city" href="#"><span>Ульяновск</span></a>
        </p>
      </header>
      <div class="about">
        <h1 class="about__title">Каршеринг</h1>
        <p class="about__title about__title-text">Need for drive</p>
        <p class="about__text">Поминутная аренда авто твоего города</p>
        <button class="about__button">Забронировать</button>
      </div>
      <footer class="footer">
        <p class="footer__copyright">&#169; 2016-2019 «Need for drive»</p>
        <p class="footer__phone">8 (495) 234-22-44</p>
      </footer>
    </div>
    <div class="right-wrp">
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
    </div>
  </div>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";
import { Slide } from "vue-burger-menu";
import Vicon from "@/components/v-icon.vue";

const BASE_SLIDER_ITEM = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

export default {
  name: "v-main",
  components: {
    Slider,
    SliderItem,
    Slide,
    Vicon,
  },
  data() {
    return {
      bmMenuList: [
        { title: "Парковка", href: "#" },
        { title: "Страховка", href: "#" },
        { title: "Бензин", href: "#" },
        { title: "Обслуживание", href: "#" },
      ],
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

<style lang="scss"></style>
