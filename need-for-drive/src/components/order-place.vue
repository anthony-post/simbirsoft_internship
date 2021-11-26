<template>
  <div>
    <div class="input-block">
      <VDropdown
        label="Город"
        name="city"
        placeholder="Начните вводить город ..."
        :itemList="CITYLIST"
        :selectedItem="selectedCity"
        @on-item-selected="setSelectedCity"
        @on-item-reset="resetSelectedCity"
      />
      <VDropdown
        label="Пункт выдачи"
        name="point"
        placeholder="Начните вводить пункт ..."
        :itemList="FILTERED_POINTLIST"
        :selectedItem="selectedPoint"
        @on-item-selected="setSelectedPoint"
        @on-item-reset="resetSelectedPoint"
      />
    </div>
    <p class="place__text">Выбрать на карте</p>
    <div class="place__pic">
      <img src="../assets/map.jpg" alt="карта" />
    </div>
  </div>
</template>

<script>
import VDropdown from "@/components/v-dropdown.vue";
import { mapState } from "vuex"; //LOCAL
import { mapActions, mapGetters } from "vuex"; //API

export default {
  name: "order-place",
  components: {
    VDropdown,
  },
  created() {
    //API
    this.GET_CITYLIST_FROM_API();
    this.GET_POINTLIST_FROM_API();
  },
  computed: {
    //API
    ...mapGetters(["CITYLIST"]),
    ...mapGetters(["POINTLIST"]),
    ...mapGetters(["FILTERED_POINTLIST"]),

    ...mapState({
      selectedCity: (state) => state.selectedCity,
      selectedPoint: (state) => state.selectedPoint,
    }),
  },
  methods: {
    //API
    ...mapActions(["GET_CITYLIST_FROM_API"]),
    ...mapActions(["GET_POINTLIST_FROM_API"]),
    //CITY
    setSelectedCity(chosenItem) {
      this.$store.commit("SET_SELECTEDCITY", chosenItem);
    },
    resetSelectedCity() {
      this.$store.commit("RESET_SELECTEDCITY");
      this.$store.commit("RESET_SELECTEDPOINT"); //сбрасываем также ранее выбранный пункт выдачи (если он был выбран)
    },
    //POINT
    setSelectedPoint(chosenItem) {
      this.$store.commit("SET_SELECTEDPOINT", chosenItem);
    },
    resetSelectedPoint() {
      this.$store.commit("RESET_SELECTEDPOINT");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.input-block {
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.place__text {
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color;
  padding: 30px 0 0 0;
}

.place__pic img {
  max-width: 100%;
}

@media #{$media} and (min-width: 320px) and (max-width: 767px) {
  .input-block {
    width: 250px;
    margin: 0 auto;
  }
}
</style>
