<template>
  <div class="wrapper">
    <div class="sidebar"></div>
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
      <slider style="height: 100vh" animation="fade">
        <slider-item
          v-for="(i, index) in list"
          :key="index"
          :style="i"
          @click="hello"
        >
          <!-- <p style="line-height: 280px; font-size: 5rem; text-align: center">
            Page{{ index + 1 }}
          </p> -->
          <div>
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

export default {
  name: "About",
  components: {
    Slider,
    SliderItem,
  },
  data() {
    return {
      list: [
        {
          backgroundColor: "#3f51b5",
          width: "100%",
          height: "100%",
          title: "Бесплатная парковка",
          text: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
        },
        { backgroundColor: "#eee", width: "100%", height: "100%" },
        { backgroundColor: "#f44336", width: "100%", height: "100%" },
        {
          backgroundImage: "url('./assets/first_pic_slide.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        },
        {
          backgroundImage: "url('https://sebhastian.com/img/default.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        },
      ],
      // title1: "Бесплатная парковка",
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
.header,
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: #0ec261;
}

.map-icon {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #999999;
}

/* .map-icon:before {
  content: "";
  background-image: url("./assets/Group.svg");
} */

.title {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 70px;
  line-height: 66px;
  // color: #121212;
}

.text {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 30px;
  color: #999999;
}

.button {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(90deg, #0ec261 2.61%, #039f67 112.6%);
  background-blend-mode: darken;
  border-radius: 8px;
  padding: 0.5em 2.5em;
}

.copyright {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: #999999;
}

.phone {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: #121212;
}

.slider-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  color: #ffffff;
}

.slider-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 100%;
  color: #ffffff;
}

.slider-button {
  font-family: Roboto;
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
  padding: 0.5em 1em;
}

.slider {
  height: 100vh;
}
</style>
