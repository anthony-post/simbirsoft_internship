<template>
  <div class="main-wrp">
    <div class="left-wrp">
      <vheader />
      <div class="about">
        <h1 class="about__title">Каршеринг</h1>
        <p class="about__title about__title-text">Need for drive</p>
        <p class="about__text">Поминутная аренда авто твоего города</p>
        <router-link :to="{ name: 'v-order' }"
          ><button class="about__button">Забронировать</button>
        </router-link>
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

<style lang="scss">
@import "@/assets/variables.scss";
.main-wrp {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
}

.left-wrp {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 0 60px;
}

.left-wrp,
.right-wrp {
  flex-basis: 50%;
}

.about {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.about__title {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 70px;
  line-height: 66px;
  color: $color-title;
  margin: 0 64px;
}

.about__title-text {
  color: $color-text;
}

.about__text {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 30px;
  color: #999999;
  padding: 1em 0 2em 0;
  margin: 0 64px;
}

.about__button {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(90deg, #0ec261 2.61%, #039f67 112.6%);
  background-blend-mode: darken;
  border-radius: 8px;
  border: none;
  padding: 1em 3em;
  margin: 0 64px;
  cursor: pointer;
}

.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.footer__copyright {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: #999999;
  margin: 0 0 32px 64px;
}

.footer__phone {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: #121212;
  margin: 0 64px 32px 0;
}

@media #{$media} and (min-width: 1024px) and (max-width: 1439px) {
  .left-wrp {
    flex-basis: 60%;
  }

  .about__title,
  .about__text,
  .about__button {
    margin: 0 32px 0 32px;
  }

  .footer__copyright {
    margin: 0 0 32px 32px;
  }

  .footer__phone {
    margin: 0 32px 32px 0;
  }

  .right-wrp {
    flex-basis: 40%;
  }
}

@media #{$media} and (min-width: 768px) and (max-width: 1023px) {
  .left-wrp {
    flex-basis: 100%;
  }

  .right-wrp {
    flex-basis: 0;
  }
}

@media #{$media} and (min-width: 320px) and (max-width: 767px) {
  .left-wrp {
    flex-basis: 100%;
    margin: 0;
  }

  .about {
    padding: 0 0 150px 0;
  }

  .about__title,
  .about__text {
    margin: 0 16px;
  }

  .about__title {
    font-size: 32px;
    line-height: 100%;
  }

  .about__text {
    font-size: 18px;
    line-height: 21px;
  }

  .about__button {
    width: 100vw;
    border-radius: 0px;
    margin: 0;
  }

  .footer {
    background: #151b1f;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .footer__copyright {
    color: #eeeeee;
    order: 1;
  }

  .footer__phone {
    color: #0ec261;
    order: 0;
  }

  .footer__copyright {
    margin: 0 16px 16px 0;
  }

  .footer__phone {
    margin: 16px 16px 8px 0;
  }

  .right-wrp {
    flex-basis: 0%;
  }
}
</style>
