<template>
  <header class="header">
    <p class="header__logo">Need for drive</p>
    <p class="header__map">
      <vicon class="header__icon" icon-id="icon-map" width="20" height="20" />
      <a class="header__city" href="#"><span>Ульяновск</span></a>
    </p>
  </header>
</template>

<script>
import Vicon from "@/components/v-icon.vue";

export default {
  name: "v-header",
  components: {
    Vicon,
  },
};
</script>

<style lang="scss"></style>
