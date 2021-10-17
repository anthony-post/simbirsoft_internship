<template>
  <div class="tabs">
    <div class="tabs__border">
      <ul class="tab-list order-center">
        <li
          class="tab__item"
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectedTab = tab"
          :class="{ tab__item_active: selectedTab === tab }"
        >
          {{ tab
          }}<span><vicon icon-id="icon-arrow" width="6" height="8" /></span>
        </li>
      </ul>
    </div>
    <div class="order order-center">
      <!--при выполнении условия v-show блоки (см. ниже Place, Model, Additional, Summary) показываются-->
      <div
        class="order__window place"
        v-show="selectedTab === 'Местоположение'"
      >
        <!--TO DO Place-->
        <div>
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
          <img src="../assets/map.jpg" alt="карта" />
        </div>
        <!--TO DO Model-->
      </div>
      <div class="order__window model" v-show="selectedTab === 'Модель'">
        <vordermodel />
      </div>
      <!--TO DO Additional-->
      <div
        class="order__window additional"
        v-show="selectedTab === 'Дополнительно'"
      >
        <vorderadditional />
      </div>
      <!--TO DO Summary-->
      <div class="order__window summary" v-show="selectedTab === 'Итого'">
        <vordersummary />
      </div>
      <!--TO DO Total-->
      <div class="total">
        <p class="total__title">Ваш заказ:</p>
        <div>
          <p class="total-wrp">
            <span class="total__text">Пункт выдачи</span
            ><span class="total__city">......................</span
            ><span class="total__city">{{ city }} {{ street }}</span>
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
import Vordermodel from "@/components/v-order-model.vue";
import Vorderadditional from "@/components/v-order-additional.vue";
import Vordersummary from "@/components/v-order-summary.vue";

export default {
  name: "v-tabs",
  components: {
    Vicon,
    Vordermodel,
    Vorderadditional,
    Vordersummary,
  },
  data() {
    return {
      city: "",
      street: "",
      tabs: ["Местоположение", "Модель", "Дополнительно", "Итого"], //загаловки вкладок
      selectedTab: "Местоположение", //см. выше - по клику @click на вкладку в это свойство будет записываться значение tab с названием активной вкладки
    };
  },
};
</script>
