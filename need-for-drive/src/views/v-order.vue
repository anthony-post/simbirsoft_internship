<!--TO DO Пока неиспользуемый компонет-->
<template>
  <div class="wrapper">
    <vsidebar />
    <div class="order-wrp">
      <vheader />
      <ul class="nav-list">
        <li v-for="(navItem, index) in navList" :key="index">
          {{ navItem }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vsidebar from "@/components/v-sidebar.vue";
import Vheader from "@/components/v-header.vue";

export default {
  name: "v-order",
  components: {
    Vsidebar,
    Vheader,
  },
  data() {
    return {
      navList: ["Местоположение", "Модель", "Дополнительно", "Итого"],
    };
  },
};
</script>

<style lang="scss"></style>
