<template>
  <header class="header">
    <p class="header__logo header__logo-order">Need for drive</p>
    <p class="header__map header__map-order">
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

<style lang="scss">
@import "@/assets/variables.scss";
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  margin: 32px 0 32px 64px;
}

.header__map {
  margin: 32px 64px 32px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header__logo {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: $color-text;
}

.header__icon {
  margin: 0;
}

.header__city {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #999999;
  text-decoration: none;
  padding: 0 0 0 5px;
}

@media #{$media} and (min-width: 1024px) and (max-width: 1439px) {
  .header__logo {
    margin: 32px 0 32px 32px;
  }

  .header__map {
    margin: 32px 32px 32px 0;
  }
}

@media #{$media} and (min-width: 320px) and (max-width: 767px) {
  .header {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .header__logo {
    line-height: 100%;
    margin: 16px 16px 0 0;
  }

  .header__map {
    margin: 16px 16px 16px 0;
  }
}
</style>
