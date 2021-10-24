<template>
  <div class="order-wrp">
    <vheader class="order-center" />
    <vtabs />
    <!--Реализация переключения вкладок через v-show-->
    <!-- <tabs /> -->
  </div>
</template>

<script>
import Vheader from "@/components/v-header.vue";
import Vtabs from "@/components/v-tabs.vue";
// import Tabs from "../components/tabs.vue";

export default {
  name: "v-order",
  components: {
    Vheader,
    Vtabs,
    // Tabs,
  },
};
</script>

<style lang="scss"></style>
