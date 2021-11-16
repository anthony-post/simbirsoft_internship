import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //API
    cityList: [],

    selectedCity: {
      name: "",
    },

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
    updatePlaceCity(state, city) {
      state.selectedCity.name = city;
    },

    //selectedCity
    // setSelectedCity(state, payload) {
    //   state.state.selectedCity.name = payload;
    // },

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
      axios("https://api-factory.simbirsoft1.com/api/db/city", {
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

    //selectedCity
    // doChangeSelectedCity: (context, payload) => {
    //   context.commit("setSelectedCity", payload);
    // },
  },
  getters: {
    CITYLIST(state) {
      return state.cityList;
    },

    //selectedCity
    // getSelectedCity(state) {
    //   return state.selectedCity.name;
    // },
  },
  modules: {},
});
