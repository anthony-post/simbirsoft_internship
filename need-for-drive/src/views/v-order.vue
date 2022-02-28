<template>
  <div class="order-wrp">
    <vheader class="order-center" />
    <vtabs />
    <!--Pop up confirm-->
    <popUp v-if="popUpConfirm" />
  </div>
</template>

<script>
import Vheader from "@/components/v-header.vue";
import Vtabs from "@/components/v-tabs.vue";
import { mapState } from "vuex";
import popUp from "@/components/pop-up.vue";

export default {
  name: "v-order",
  components: {
    Vheader,
    Vtabs,
    popUp,
  },
  computed: {
    ...mapState({ popUpConfirm: (state) => state.popUpConfirm }),
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.order-wrp {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
