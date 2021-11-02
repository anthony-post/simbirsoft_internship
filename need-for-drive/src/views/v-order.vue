<template>
  <div class="order-wrp">
    <vheader class="order-center" />
    <vtabs />
  </div>
</template>

<script>
import Vheader from "@/components/v-header.vue";
import Vtabs from "@/components/v-tabs.vue";

export default {
  name: "v-order",
  components: {
    Vheader,
    Vtabs,
  },
};
</script>

<style lang="scss"></style>
