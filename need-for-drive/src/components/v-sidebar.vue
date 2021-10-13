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

<style lang="scss"></style>
