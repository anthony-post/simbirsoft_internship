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
    checkedCategoryCars: "",
    selectedCar: {},
    selectedColor: "",
    selectedDateFrom: "",
    selectedDateTo: "",
    selectedTimeTo: "",
    selectedRate: "",
    selectedTank: false,
    selectedBabyChair: false,
    selectedRightHandDrive: false,
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
    //CATEGORY CAR
    SET_CHECKEDCATEGORYCAR(state, checkedCategoryCars) {
      state.checkedCategoryCars = checkedCategoryCars;
    },
    RESET_CHECKEDCATEGORYCAR(state) {
      state.checkedCategoryCars = "";
    },
    //CAR
    SET_SELECTEDCAR(state, selectedCar) {
      state.selectedCar = selectedCar;
    },
    RESET_SELECTEDCAR(state) {
      state.selectedCar = {};
    },
    //COLOR
    SET_SELECTEDCOLOR(state, selectedColor) {
      state.selectedColor = selectedColor;
    },
    RESET_SELECTEDCOLOR(state) {
      state.selectedColor = "";
    },
    //DATEFROM
    SET_SELECTEDDATEFROM(state, selectedDateFrom) {
      state.selectedDateFrom = selectedDateFrom;
    },
    RESET_SELECTEDDATEFROM(state) {
      state.selectedDateFrom = "";
    },
    //DATETO
    SET_SELECTEDDATETO(state, selectedDateTo) {
      state.selectedDateTo = selectedDateTo;
    },
    RESET_SELECTEDDATETO(state) {
      state.selectedDateTo = "";
    },
    //TIMETO
    SET_SELECTEDTIMETO(state, selectedTimeTo) {
      state.selectedTimeTo = selectedTimeTo;
    },
    RESET_SELECTEDTIMETO(state) {
      state.selectedTimeTo = "";
    },
    //RATE
    SET_SELECTEDRATE(state, selectedRate) {
      state.selectedRate = selectedRate;
    },
    RESET_SELECTEDRATE(state) {
      state.selectedRate = "";
    },
    //TANK
    SET_SELECTEDTANK(state, selectedTank) {
      state.selectedTank = selectedTank;
    },
    RESET_SELECTEDTANK(state) {
      state.selectedTank = false;
    },
    //BABY CHAIR
    SET_SELECTEDBABYCHAIR(state, selectedBabyChair) {
      state.selectedBabyChair = selectedBabyChair;
    },
    RESET_SELECTEDBABYCHAIR(state) {
      state.selectedBabyChair = false;
    },
    //RIGHT HAND DRIVE
    SET_SELECTEDRIGHTHANDDRIVE(state, selectedRightHandDrive) {
      state.selectedRightHandDrive = selectedRightHandDrive;
    },
    RESET_SELECTEDRIGHTHANDDRIVE(state) {
      state.selectedRightHandDrive = false;
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

    // FILTERED_POINTLIST(state) {
    //   if (!state.selectedCity.id) {
    //     return state.pointList;
    //   } else {
    //     return state.pointList.filter((point) => {
    //       if (point?.cityId?.id) {
    //         point.cityId.id.includes(state.selectedCity.id);
    //       }
    //     });
    //   }
    // },

    FILTERED_POINTLIST(state) {
      const resultPointList = [];
      const length = state.pointList.length;

      if (!state.selectedCity.id) {
        return resultPointList;
      } else {
        for (var i = 0; i < length; i++) {
          if (
            state.pointList[i]?.cityId?.id.indexOf(state.selectedCity.id) != -1
          ) {
            resultPointList.push(state.pointList[i]);
          }
        }
        return resultPointList;
      }
    },
    CARLIST(state) {
      return state.carList;
    },
  },
  modules: {},
});
