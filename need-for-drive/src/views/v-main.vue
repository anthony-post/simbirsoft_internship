<template>
  <div class="main-wrp">
    <div class="left-wrp">
      <vheader />
      <div class="about">
        <h1 class="about__title">Каршеринг</h1>
        <p class="about__title about__title-text">Need for drive</p>
        <p class="about__text">Поминутная аренда авто твоего города</p>
        <router-link :to="{ name: 'v-order' }"
          ><button class="about__button">Забронировать</button></router-link
        >
      </div>
      <footer class="footer">
        <p class="footer__copyright">&#169; 2016-2019 «Need for drive»</p>
        <p class="footer__phone">8 (495) 234-22-44</p>
      </footer>
    </div>
    <div class="right-wrp">
      <vslider />
    </div>
  </div>
</template>

<script>
import Vheader from "@/components/v-header.vue";
import Vslider from "@/components/v-slider.vue";

export default {
  name: "v-main",
  components: {
    Vheader,
    Vslider,
  },
};
</script>

<style lang="scss"></style>
