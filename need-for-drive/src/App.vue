<template>
  <div class="wrapper">
    <vsidebar />
    <router-view />
  </div>
</template>

<script>
import Vsidebar from "@/components/v-sidebar.vue";

export default {
  components: {
    Vsidebar,
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.wrapper {
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  min-width: 1440px;
}

@media #{$media} and (min-width: 1024px) and (max-width: 1439px) {
  .wrapper {
    min-width: 1024px;
    max-width: 1439px;
  }
}

@media #{$media} and (min-width: 768px) and (max-width: 1023px) {
  .wrapper {
    min-width: 768px;
    max-width: 1023px;
  }
}

@media #{$media} and (min-width: 320px) and (max-width: 767px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 320px;
    max-width: 767px;
  }
}
</style>
