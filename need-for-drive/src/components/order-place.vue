<template>
  <div>
    <div class="input-block">
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
    </div>
    <p class="place__text">Выбрать на карте</p>
    <div class="place__pic">
      <img src="../assets/map.jpg" alt="карта" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "order-place",
  computed: {
    ...mapState({
      name: (state) => state.city.name,
      address: (state) => state.city.address,
    }),
  },
  methods: {
    updateCityName(e) {
      this.$store.commit("updateCityName", e.target.value);
    },
    updateAddress(e) {
      this.$store.commit("updateAddress", e.target.value);
    },
  },
};
</script>
