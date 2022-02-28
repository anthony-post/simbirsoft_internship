<template>
  <div class="order-wrp">
    <vheader class="order-center" />
    <div class="tabs">
      <div class="tabs__border">
        <ul class="tab-list order-center">
          <li class="tab__item">Заказ номер {{ orderId }}</li>
        </ul>
      </div>
      <div class="order">
        <div class="order__window">
          <p class="order__title">Ваш заказ подтверждён</p>

          <div class="summary__wrp">
            <div>
              <p class="summary__car-name" v-if="ORDER.carId">
                {{ ORDER.carId.name }}
              </p>
              <div class="car-number__wrp">
                <p class="summary__car-number" v-if="ORDER.carId">
                  {{ ORDER.carId.number }}
                </p>
              </div>
              <p class="summary__additional" v-if="ORDER.isFullTank">
                Топливо <span class="summary__selected-value">100%</span>
              </p>
              <p class="summary__additional" v-if="ORDER.isNeedChildChair">
                Детское кресло <span class="summary__selected-value">Да</span>
              </p>
              <p class="summary__additional" v-if="ORDER.isRightWheel">
                Правый руль <span class="summary__selected-value">Да</span>
              </p>
              <p class="summary__additional">
                Доступна с
                <span class="summary__selected-value">{{
                  this.convertToDate
                }}</span>
              </p>
            </div>
            <img
              class="car__img"
              v-if="ORDER.carId"
              :src="ORDER.carId.thumbnail.path"
              :alt="ORDER.carId.thumbnail.originalname"
            />
          </div>
        </div>

        <div class="total">
          <p class="total__title">Ваш заказ:</p>
          <ul class="total__list">
            <li>
              <span class="item__title">Пункт выдачи</span>
              <div class="item__value">
                <span v-if="ORDER.cityId">{{ ORDER.cityId.name }}</span>
                <span v-if="ORDER.pointId">{{ ORDER.pointId.name }}</span>
              </div>
            </li>
            <li v-if="ORDER.carId">
              <span class="item__title">Модель</span>
              <span class="item__value">{{ ORDER.carId.name }}</span>
            </li>
            <li v-if="ORDER.color">
              <span class="item__title">Цвет</span>
              <span class="item__value">{{ ORDER.color }}</span>
            </li>
            <li v-if="rentalDuration">
              <span class="item__title">Длительность аренд</span>
              <span class="item__value" v-if="rentalDuration.days"
                >{{ rentalDuration.days }}д</span
              ><span class="item__value" v-if="rentalDuration.hours"
                >{{ rentalDuration.hours }}ч</span
              >
            </li>
            <li v-if="ORDER.rateId">
              <span class="item__title">Тариф</span>
              <span class="item__value">{{
                ORDER.rateId.rateTypeId.name
              }}</span>
            </li>
            <li v-if="ORDER.isFullTank">
              <span class="item__title">Полный бак</span>
              <span class="item__value">Да</span>
            </li>
            <li v-if="ORDER.isNeedChildChair">
              <span class="item__title">Детское кресло</span>
              <span class="item__value">Да</span>
            </li>
            <li v-if="ORDER.isRightWheel">
              <span class="item__title">Правый руль</span>
              <span class="item__value">Да</span>
            </li>
          </ul>
          <!--Цена-->
          <p class="total__price">
            Цена:
            <span class="total__price total__price-thin"
              >{{ ORDER.price }} руб.</span
            >
          </p>
          <!--Кнопка Отменить-->
          <router-link :to="{ name: 'v-order' }"
            ><button
              class="total__button total__button_active button-colored"
              @click="cancelOrder"
            >
              Отменить
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vheader from "@/components/v-header.vue";
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "v-tabs",
  components: {
    Vheader,
  },
  created() {
    this.GET_ORDER_FROM_API();
  },
  computed: {
    //API получаем состояние объекта (в который записывается выбранный город) из store
    ...mapState({
      orderId: (state) => state.orderId,
      rentalDuration: (state) => state.rentalDuration,
    }),
    ...mapGetters(["ORDER"]),
    convertToDate() {
      let mlsDate = this.ORDER.dateFrom;
      let dateObj = new Date(mlsDate);

      let dd = dateObj.getDate();
      if (dd < 10) dd = "0" + dd;

      let mm = dateObj.getMonth() + 1;
      if (mm < 10) mm = "0" + mm;

      let yy = dateObj.getFullYear();
      if (yy < 10) yy = "0" + yy;

      let hh = dateObj.getHours();
      if (hh < 10) hh = "0" + hh;

      let min = dateObj.getMinutes();
      if (min < 10) min = "0" + min;

      return dd + "." + mm + "." + yy + " " + hh + ":" + min;
    },
  },
  methods: {
    ...mapActions(["GET_ORDER_FROM_API"]),
    ...mapActions(["PUT_CANCEL_ORDERID_TO_API"]),
    //TO DO
    cancelOrder() {
      this.$store.commit("RESET_POPUPCONFIRM");
      this.PUT_CANCEL_ORDERID_TO_API();
      this.$store.commit("RESET_ORDERID_TO_STATE");
      this.$store.commit("RESET_ORDERCONFIRMED_TO_STATE");
      this.$store.commit("RESET_SELECTEDCITY");
      this.$store.commit("RESET_SELECTEDPOINT");
      this.$store.commit("RESET_CHECKEDCATEGORYCAR");
      this.$store.commit("RESET_SELECTEDCAR");
      this.$store.commit("RESET_SELECTEDCOLOR");
      this.$store.commit("RESET_SELECTEDDATEFROM");
      this.$store.commit("RESET_SELECTEDDATETO");
      this.$store.commit("RESET_SELECTEDTIMETO");
      this.$store.commit("RESET_RENTALDURATION");
      this.$store.commit("RESET_SELECTEDRATE");
      this.$store.commit("RESET_SELECTEDTANK");
      this.$store.commit("RESET_SELECTEDBABYCHAIR");
      this.$store.commit("RESET_SELECTEDRIGHTHANDDRIVE");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.order-wrp {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  margin: 0 0 0 60px;
}

@media #{$media} and (min-width: 320px) and (max-width: 767px) {
  .order-wrp {
    width: 100vw;
    margin: 0;
  }
}

.tabs__border {
  border-top: 1px solid $color-grey-light;
  border-bottom: 1px solid $color-grey-light;
}

.tab-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style-type: none;
  padding: 0 64px;
  margin: 0;
}

.tab__item {
  font-family: $ff;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: $color-title;
  padding: 8px 0;
}

.tab__item-icon {
  padding: 0 0 0 20px;
}

.tab__item_active {
  color: $color-text;
}

.order {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.order__window {
  flex-basis: 70%;
  padding: 32px 150px 0 64px;
}

.order__title {
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: $color-title;
  margin: 0;
}

.summary__wrp {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.summary__title {
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: $color-title;
}

.summary__car-name {
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: $color;
}

.car-number__wrp {
  border: 1px solid #999999;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 5px;
  width: 94px;
  text-align-last: center;
}

.summary__car-number {
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: $color;
  margin: 0;
}

.summary__additional {
  font-family: $ff;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: $color;
}

.summary__selected-value {
  font-weight: 300;
}

.car__img {
  max-width: 50%;
}

@media #{$media} and (min-width: 1024px) and (max-width: 1439px) {
  .order__window {
    padding: 32px 32px 0 32px;
  }

  .tab-list {
    padding: 0 32px;
  }
}

@media #{$media} and (min-width: 768px) and (max-width: 1023px) {
  .order__window {
    padding: 32px 32px 0 64px;
  }
}

@media #{$media} and (min-width: 320px) and (max-width: 767px) {
  .order {
    flex-wrap: wrap;
  }

  .order__window {
    flex-basis: 100%;
    padding: 16px 16px 0 16px;
  }

  .tab-list {
    padding: 0 16px;
    flex-wrap: wrap;
  }
}

.total {
  width: 288px;
  padding: 32px 64px 0 32px;
  border-left: 1px solid $color-grey-light;
  // height: calc(100vh - 165px);
}

.total__title {
  font-family: $ff;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: right;
  color: $color-title;
  margin-top: 0;
}

.total__list {
  list-style: none;
  padding: 0;
}

.total__list li {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 0 0 16px 0;
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color-grey;
}

.total__list li .item__title {
  order: 1;
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color-title;
  margin: 0;
}

.total__list li .item__value {
  order: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color-grey;
}

.total__list li::after {
  background-image: radial-gradient(
    circle,
    currentcolor 1px,
    transparent 1.5px
  );
  background-position: bottom;
  background-size: 1ex 4.5px;
  background-repeat: space no-repeat;
  content: "";
  flex-grow: 1;
  height: 1em;
  order: 2;
}

.total__text {
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color-title;
}

.total__price {
  font-family: $ff;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: $color-title;
}

.total__price-thin {
  font-weight: 400;
}

.total__button {
  font-family: $ff;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: $color-white;
  background: $color-grey-light;
  border-radius: 8px;
  border: none;
  padding: 15px 0;
  width: 100%;
}

.total__button_active {
  background: $color-text;
  cursor: pointer;
}

.button-colored {
  background: linear-gradient(90deg, #493013 0%, #7b0c3b 100%);
  border-radius: 4px;
  margin: 0 0 0 8px;
}

@media #{$media} and (min-width: 1024px) and (max-width: 1439px) {
  .total {
    padding: 32px 32px 0 32px;
  }
}

@media #{$media} and (min-width: 768px) and (max-width: 1023px) {
  .total__button {
    font-size: 16px;
  }

  .total {
    width: 25vw;
  }
}

@media #{$media} and (min-width: 320px) and (max-width: 767px) {
  .total {
    width: 100vw;
    height: auto;
    border: none;
    padding: 16px 0;
  }

  .total__title,
  .total__price {
    padding: 0 16px;
  }

  .total__list li {
    padding: 0 16px;
  }
}
</style>
