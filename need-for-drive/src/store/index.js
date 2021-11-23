import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //API
    cityList: [],
    pointList: [],
    carList: [],
    //SELECTED
    selectedCity: {},
    selectedPoint: {},
    selectedCar: {},
  },
  mutations: {
    //API
    SET_CITYLIST_TO_STATE: (state, cityList) => {
      state.cityList = cityList.data.data;
    },
    SET_POINTLIST_TO_STATE: (state, pointList) => {
      state.pointList = pointList.data.data;
    },
    SET_CARLIST_TO_STATE: (state, carList) => {
      state.carList = carList.data.data;
    },
    //CITY
    SET_SELECTEDCITY(state, selectedCity) {
      state.selectedCity = selectedCity;
    },
    RESET_SELECTEDCITY(state) {
      state.selectedCity = {};
    },
    //POINT
    SET_SELECTEDPOINT(state, selectedPoint) {
      state.selectedPoint = selectedPoint;
    },
    RESET_SELECTEDPOINT(state) {
      state.selectedPoint = {};
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
    GET_POINTLIST_FROM_API({ commit }) {
      axios("https://api-factory.simbirsoft1.com/api/db/point", {
        method: "GET",
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        },
      })
        .then((pointList) => {
          commit("SET_POINTLIST_TO_STATE", pointList);
          return pointList;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    GET_CARLIST_FROM_API({ commit }) {
      axios("https://api-factory.simbirsoft1.com/api/db/car", {
        method: "GET",
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        },
      })
        .then((carList) => {
          commit("SET_CARLIST_TO_STATE", carList);
          return carList;
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
    POINTLIST(state) {
      return state.pointList;
    },
    FILTERED_POINTLIST(state) {
      return state.pointList.filter((point) =>
        point.cityId.id.includes(state.selectedCity.id)
      );
    },
    CARLIST(state) {
      return state.carList;
    },
  },
  modules: {},
});
