// TO DO
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: {
      id: "abc",
      name: "Ульяновск",
      address: { id: "123", street: "Комарова", building: "13" },
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
