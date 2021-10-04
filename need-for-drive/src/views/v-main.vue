<template>
  <div class="wrapper">
    <div class="sidebar">
      <slide width="1440">
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
            ><vicon icon-name="telegram"><icontelegram /></vicon
          ></a>
          <a class="socialicons" href="#"
            ><vicon icon-name="facebook"><iconfacebook /></vicon
          ></a>
          <a class="socialicons" href="#"
            ><vicon icon-name="instagram"><iconinstagram /></vicon
          ></a>
        </div>
      </slide>
      <button class="sidebar__button">Eng</button>
    </div>
    <div class="left-wrp">
      <header class="header">
        <p class="header__logo">Need for drive</p>
        <p class="header__map-icon">
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
            <path
              d="M16.0802 8.36364C16.0802 14.0909 8.54011 19 8.54011 19C8.54011 19 1 14.0909 1 8.36364C1 6.41068 1.7944 4.53771 3.20845 3.15676C4.62249 1.77581 6.54035 1 8.54011 1C10.5399 1 12.4577 1.77581 13.8718 3.15676C15.2858 4.53771 16.0802 6.41068 16.0802 8.36364Z"
              stroke="#999999"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.5401 10.8182C9.9282 10.8182 11.0535 9.71925 11.0535 8.36364C11.0535 7.00803 9.9282 5.90909 8.5401 5.90909C7.15201 5.90909 6.02673 7.00803 6.02673 8.36364C6.02673 9.71925 7.15201 10.8182 8.5401 10.8182Z"
              stroke="#999999"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="header__city">Ульяновск</span>
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
import Icontelegram from "@/components/icons/icon-telegram.vue";
import Iconfacebook from "@/components/icons/icon-facebook.vue";
import Iconinstagram from "@/components/icons/icon-instagram.vue";

export default {
  name: "v-main",
  components: {
    Slider,
    SliderItem,
    Slide,
    Vicon,
    Icontelegram,
    Iconfacebook,
    Iconinstagram,
  },
  data() {
    return {
      bmMenuList: [
        { title: "Парковка", href: "#" },
        { title: "Страховка", href: "#" },
        { title: "Бензин", href: "#" },
        { title: "Обслуживание", href: "#" },
      ],
      //вынести общие свойства в объект - константу. в массиве будет [{...BASE_SLIDER_ITEM, backgroundImage: ...}]
      BASE_SLIDER_ITEM: {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      },
      sliderList: [
        //Выходит ошибка что BASE_SLIDER_ITEM не определена (см.выше)???
        // {
        //   ...BASE_SLIDER_ITEM,
        //   backgroundImage: `url(${require("../assets/slide_parking.jpg")})`,
        //   title: "Бесплатная парковка",
        //   text: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
        // },
        {
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${require("../assets/slide_parking.jpg")})`,
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
};
</script>

<style lang="scss"></style>
