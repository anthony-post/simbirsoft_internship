<template>
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
</template>

<script>
import { Slide } from "vue-burger-menu";
import Vicon from "@/components/v-icon.vue";
import "@/assets/variables.scss";

export default {
  name: "v-sidebar",
  components: {
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
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";
.sidebar {
  position: relative;
  background: #151b1f;
  min-width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  height: 100vh;
}

//START_burger-menu
//Наименование стилей заданы в библиотеке v-burger-menu
//important указан для тех стилей, которые совпадают с библиотечными v-burger-menu для того, что при сборке не применялись по-умолчанию библиотечные стили
.bm-burger-button {
  position: absolute !important;
  width: 30px !important;
  height: 30px !important;
  left: 16px !important;
  top: 32px !important;
  cursor: pointer;
}
.bm-burger-bars {
  background-color: #ffffff !important;
  border-radius: 50px !important;
}
.line-style {
  position: absolute;
  height: 10% !important;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 32px !important;
  left: 32px !important;
  cursor: pointer;
}
.bm-cross {
  background: #ffffff !important;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background: linear-gradient(
    to right,
    #111518 52.3vw,
    rgba(21, 27, 31, 0.81) 50vw
  ) !important;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20% !important; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
.bm-item-list {
  color: #b8b7ad;
  margin-left: 10%;
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0 0 0.5em 0 !important;
}
.bm-item-list > *:last-child {
  padding: 1.5em 0 0 0 !important;
}
.bm-item-list > * > span {
  margin-left: 0 !important;
  font-family: "Roboto", sans-serif !important;
  font-style: normal;
  font-weight: 500 !important;
  font-size: 32px !important;
  line-height: 37px;
  color: #ffffff;
  text-transform: uppercase;
}
.bm-item-list > * > span:hover {
  color: #0ec261;
}
//END_burger-menu

svg {
  fill: #ffffff;
  display: inline-block;
  vertical-align: baseline;
  margin: 0 20px 0 0;
}

.socialicons > svg:hover {
  fill: #0ec261;
}

.sidebar__button {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  // color: #0ec261;
  color: $color-text;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 0 0 32px 0;
}

@media #{$media} and (min-width: 1024px) and (max-width: 1439px) {
  //Наименование стилей заданы в библиотеке v-burger-menu
  //START burger-menu
  .bm-menu {
    background: linear-gradient(
      to right,
      #111518 62.3vw,
      rgba(21, 27, 31, 0.81) 40vw
    ) !important;
  }
  //END burger-menu
}

@media #{$media} and (min-width: 768px) and (max-width: 1023px) {
  //Наименование стилей заданы в библиотеке v-burger-menu
  //START burger-menu
  .bm-menu {
    background: linear-gradient(
      to right,
      #111518 100%,
      rgba(21, 27, 31, 0.81) 50%
    ) !important;
  }
  //END burger-menu
}

@media #{$media} and (min-width: 320px) and (max-width: 767px) {
  .sidebar {
    flex-basis: 0%;
    position: relative;
  }

  //Наименование стилей заданы в библиотеке v-burger-menu
  //START burger-menu
  .bm-menu {
    background: linear-gradient(
      to right,
      #111518 100%,
      rgba(21, 27, 31, 0.81) 50%
    ) !important;
  }

  .bm-burger-button {
    margin: 5px 0 0 0 !important;
    width: 25px !important;
    height: 25px !important;
    top: 16px !important;
    left: 16px !important;
  }

  .bm-burger-bars {
    background-color: #000000 !important;
  }

  .line-style {
    height: 15% !important;
  }

  .bm-item-list {
    margin-left: 30px !important;
    padding: 10px 0 0 0 !important;
  }

  .bm-item-list > * > span {
    font-size: 22px !important;
    line-height: 26px !important;
  }
  //END burger-menu

  .sidebar__button {
    display: none;
  }
}
</style>
