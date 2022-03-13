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
import PopUp from "@/components/pop-up.vue";

export default {
  name: "v-order",
  components: {
    Vheader,
    Vtabs,
    PopUp,
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
  width: 100vw;
}
</style>
