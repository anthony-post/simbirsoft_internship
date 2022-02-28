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
    rateList: [],
    orderId: "",
    orderConfirmed: {},
    orderNewStatusId: "5e26a191099b810b946c5d89",
    orderConfirmedStatusId: "5e26a1f0099b810b946c5d8b",
    orderCanceledStatusId: "5e26a1f5099b810b946c5d8c",
    //SELECTED
    selectedCity: {},
    selectedPoint: {},
    checkedCategoryCars: "",
    selectedCar: {},
    selectedColor: "",
    selectedDateFrom: "Введите дату и время...",
    selectedDateTo: "Введите дату и время",
    selectedTimeTo: "",
    dateFrom: 0,
    dateTo: 0,
    rentalDuration: "",
    selectedRate: "",
    selectedTank: false,
    selectedBabyChair: false,
    selectedRightHandDrive: false,
    priceSummary: 0,
    popUpConfirm: false,
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
    SET_RATE_TO_STATE: (state, rateList) => {
      state.rateList = rateList.data.data;
    },
    SET_ORDERID_TO_STATE: (state, orderId) => {
      state.orderId = orderId.data.data.id;
    },
    RESET_ORDERID_TO_STATE: (state) => {
      state.orderId = "";
    },
    SET_ORDERCONFIRMED_TO_STATE: (state, orderConfirmed) => {
      state.orderConfirmed = orderConfirmed.data.data;
    },
    RESET_ORDERCONFIRMED_TO_STATE: (state) => {
      state.orderConfirmed = {};
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
      state.selectedDateFrom = "Введите дату и время...";
    },
    //DATETO
    SET_SELECTEDDATETO(state, selectedDateTo) {
      state.selectedDateTo = selectedDateTo;
    },
    RESET_SELECTEDDATETO(state) {
      state.selectedDateTo = "Введите дату и время";
    },
    //TIMETO
    SET_SELECTEDTIMETO(state, selectedTimeTo) {
      state.selectedTimeTo = selectedTimeTo;
    },
    RESET_SELECTEDTIMETO(state) {
      state.selectedTimeTo = "";
    },
    //RENTAL DURATION
    SET_RENTALDURATION(state) {
      state.dateFrom = Date.parse(state.selectedDateFrom);
      const concateDateTo = `${state.selectedDateTo} ${state.selectedTimeTo}`;
      state.dateTo = Date.parse(concateDateTo);
      const duration = state.dateTo - state.dateFrom;

      function convertToDays(milliSeconds) {
        let days = Math.floor(milliSeconds / (86400 * 1000));
        milliSeconds -= days * (86400 * 1000);
        let hours = Math.floor(milliSeconds / (60 * 60 * 1000));
        milliSeconds -= hours * (60 * 60 * 1000);
        let minutes = Math.floor(milliSeconds / (60 * 1000));
        return {
          days,
          hours,
          minutes,
        };
      }

      state.rentalDuration = convertToDays(duration);
    },
    RESET_RENTALDURATION(state) {
      state.dateFrom = 0;
      state.dateTo = 0;
      state.rentalDuration = "";
    },
    //RATE
    SET_SELECTEDRATE(state, selectedRate) {
      state.selectedRate = selectedRate;
    },
    RESET_SELECTEDRATE(state) {
      state.selectedRate = {};
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
    //PRICE SUMMARY
    SET_PRICESUMMARY(state, priceSummary) {
      state.priceSummary = priceSummary;
    },
    RESET_PRICESUMMARY(state) {
      state.priceSummary = 0;
    },
    //POP UP CONFIRM
    SET_POPUPCONFIRM(state) {
      state.popUpConfirm = true;
    },
    RESET_POPUPCONFIRM(state) {
      state.popUpConfirm = false;
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
    GET_RATE_FROM_API({ commit }) {
      axios("https://api-factory.simbirsoft1.com/api/db/rate", {
        method: "GET",
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        },
      })
        .then((rateList) => {
          commit("SET_RATE_TO_STATE", rateList);
          console.log(rateList);
          return rateList;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    //TO DO order
    POST_ORDER_TO_API({ commit }) {
      axios("https://api-factory.simbirsoft1.com/api/db/order", {
        method: "POST",
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        },
        data: {
          orderStatusId: this.state.orderNewStatusId,
          cityId: this.state.selectedCity.id,
          pointId: this.state.selectedPoint.id,
          carId: this.state.selectedCar.id,
          color: this.state.selectedColor,
          dateFrom: this.state.dateFrom,
          dateTo: this.state.dateTo,
          rateId: this.state.selectedRate,
          price: this.state.priceSummary,
          isFullTank: this.state.selectedTank,
          isNeedChildChair: this.state.selectedBabyChair,
          isRightWheel: this.state.selectedRightHandDrive,
        },
      })
        .then((orderId) => {
          commit("SET_ORDERID_TO_STATE", orderId);
          return orderId;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    PUT_CONFIRM_ORDERID_TO_API({ commit }) {
      const mainUrl = "https://api-factory.simbirsoft1.com/api/db/order/";
      const orderUrl = mainUrl + this.state.orderId;
      axios(orderUrl, {
        method: "PUT",
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        },
        data: {
          orderStatusId: this.state.orderConfirmedStatusId,
        },
      })
        .then((orderId) => {
          commit("SET_ORDERID_TO_STATE", orderId);
          return orderId;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    PUT_CANCEL_ORDERID_TO_API({ commit }) {
      const mainUrl = "https://api-factory.simbirsoft1.com/api/db/order/";
      const orderUrl = mainUrl + this.state.orderId;
      axios(orderUrl, {
        method: "PUT",
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        },
        data: {
          orderStatusId: this.state.orderCanceledStatusId,
        },
      })
        .then((orderId) => {
          commit("SET_ORDERID_TO_STATE", orderId);
          return orderId;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    GET_ORDER_FROM_API({ commit }) {
      const mainUrl = "https://api-factory.simbirsoft1.com/api/db/order/";
      const orderUrl = mainUrl + this.state.orderId;
      axios(orderUrl, {
        method: "GET",
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        },
      })
        .then((orderConfirmed) => {
          commit("SET_ORDERCONFIRMED_TO_STATE", orderConfirmed);
          console.log(orderConfirmed);
          return orderConfirmed;
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
    RATELIST(state) {
      return state.rateList;
    },
    ORDER(state) {
      return state.orderConfirmed;
    },
  },
  modules: {},
});
