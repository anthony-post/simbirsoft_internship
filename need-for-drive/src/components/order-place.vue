<template>
  <div>
    <div class="input-block">
      <!--API start-->
      <div class="input-wrp">
        <div><span>ДАННЫЕ из API - </span>{{ CITYLIST }}</div>
        <!-- <label class="input-block__label" for="city">Город</label>
        <input class="input-block__input" type="text" id="city" value="name" /> -->
      </div>
      <!--API end-->

      <!--LOCAl start-->
      <div class="input-wrp">
        <label class="input-block__label" for="city">Город</label>
        <input
          class="input-block__input"
          type="text"
          id="city"
          :value="name"
          @input="updateCityName"
        />
      </div>
      <div class="input-wrp">
        <label class="input-block__label" for="address">Пункт выдачи</label>
        <input
          class="input-block__input"
          type="text"
          id="address"
          placeholder="Начните вводить пункт ..."
          :value="address"
          @input="updateAddress"
        />
      </div>
      <!--LOCAl end-->
    </div>
    <p class="place__text">Выбрать на карте</p>
    <div class="place__pic">
      <img src="../assets/map.jpg" alt="карта" />
    </div>
  </div>
</template>

<script>
//API
import { mapActions, mapGetters } from "vuex";
//LOCAL
import { mapState } from "vuex";

export default {
  name: "order-place",
  computed: {
    //API
    ...mapGetters(["CITYLIST"]),
    //LOCAl
    ...mapState({
      name: (state) => state.city.name,
      address: (state) => state.city.address,
    }),
  },
  methods: {
    //API
    ...mapActions(["GET_CITYLIST_FROM_API"]),
    //LOCAl
    updateCityName(e) {
      this.$store.commit("updateCityName", e.target.value);
    },
    updateAddress(e) {
      this.$store.commit("updateAddress", e.target.value);
    },
  },
  mounted() {
    this.GET_CITYLIST_FROM_API().then((response) => {
      if (response.data) {
        console.log(response.data);
      }
    });
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

.input-wrp {
  padding: 7px 0;
}

.input-block__label {
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color;
  margin: 0 5px 0 0;
}

.input-block__input {
  width: 224px;
  border: none;
  border-bottom: 1px solid $color-grey;
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
