import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: {
      name: "",
      address: "",
    },
  },
  mutations: {
    updateCityName(state, name) {
      state.city.name = name;
    },
    updateAddress(state, address) {
      state.city.address = address;
    },
  },
  actions: {},
  modules: {},
});
