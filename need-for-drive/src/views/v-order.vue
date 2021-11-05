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

<style lang="scss">
@import "@/assets/variables.scss";

.order-wrp {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // width: calc(100vw - 60px);
  // height: 100vh;
  width: 100vw;
  margin: 0 0 0 60px;
}

@media #{$media} and (min-width: 320px) and (max-width: 767px) {
  .order-wrp {
    width: 100vw;
    margin: 0;
  }
}
</style>
