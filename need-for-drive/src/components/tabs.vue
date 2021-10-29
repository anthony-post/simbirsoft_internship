<!--Вариант переключения табов через v-show-->
<template>
  <div class="tabs">
    <div class="tabs__border">
      <ul class="tab-list order-center">
        <li
          class="tab__item"
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ tab__item_active: selectedTab === tab }"
          @click="selectedTab = tab"
        >
          {{ tab }}
          <span>
            <vicon icon-id="icon-arrow" width="6" height="8" />
          </span>
        </li>
      </ul>
    </div>
    <div class="order order-center">
      <!--TO DO Place-->
      <div
        class="order__window place"
        v-show="selectedTab === 'Местоположение'"
      >
        <div class="place">
          <div class="input-block">
            <div class="input-wrp">
              <label class="input-block__label" for="city">Город</label>
              <input
                class="input-block__input"
                type="text"
                id="city"
                v-model="city"
              />
            </div>
            <div class="input-wrp">
              <label class="input-block__label" for="delivery-point"
                >Пункт выдачи</label
              >
              <input
                class="input-block__input"
                type="text"
                id="delivery-point"
                placeholder="Начните вводить пункт ..."
                v-model="street"
              />
            </div>
          </div>
          <p class="place__text">Выбрать на карте</p>
          <div class="place__pic">
            <img src="../assets/map.jpg" alt="map" />
          </div>
        </div>
      </div>
      <!--TO DO Model-->
      <div class="order__window model" v-show="selectedTab === 'Модель'">
        <div class="input-wrp">
          <label class="input-block__label" for="model">Все модели</label>
          <input
            class="input-block__input"
            type="text"
            id="model"
            v-model="model"
          />
        </div>
      </div>
      <!--TO DO Additional-->
      <div
        class="order__window additional"
        v-show="selectedTab === 'Дополнительно'"
      ></div>
      <!--TO DO Summary-->
      <div class="order__window summary" v-show="selectedTab === 'Итого'"></div>
      <!--TO DO Total-->
      <div class="total">
        <p class="total__title">Ваш заказ:</p>
        <div>
          <p class="total-wrp">
            <span class="total__text">Пункт выдачи</span>
            <span class="dots"></span>
            <span class="total__city">{{ city }} {{ street }}</span>
          </p>
        </div>
        <p class="total__price">Цена:</p>
        <button class="total__button">Выбрать модель</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vicon from "@/components/v-icon.vue";

export default {
  name: "tabs",
  components: {
    Vicon,
  },
  data() {
    return {
      city: "",
      street: "",
      model: "",
      tabs: ["Местоположение", "Модель", "Дополнительно", "Итого"],
      selectedTab: "Местоположение",
    };
  },
  //TO DO последовательное переключение вкладок
};
</script>
