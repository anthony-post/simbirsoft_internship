import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //API
    cityList: [],

    //LOCAL
    city: {
      name: "",
      address: "",
    },
  },
  mutations: {
    //API
    SET_CITYLIST_TO_STATE: (state, cityList) => {
      state.cityList = cityList;
    },

    //LOCAL
    updateCityName(state, name) {
      state.city.name = name;
    },
    updateAddress(state, address) {
      state.city.address = address;
    },
  },
  actions: {
    //API
    GET_CITYLIST_FROM_API({ commit }) {
      return axios("http://api-factory.simbirsoft1.com/api/db/city", {
        method: "GET",
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        },
      })
        .then((cityList) => {
          commit("SET_CITYLIST_TO_STATE", cityList);
          return cityList;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  getters: {
    CITYLIST(state) {
      return state.cityList;
    },
  },
  modules: {},
});
