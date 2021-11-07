<template>
  <div class="dropdown input-wrp">
    <label class="input-block__label" for="city">Город</label>
    <!-- Dropdown Input -->
    <input
      class="dropdown-input input-block__input"
      type="text"
      name="city"
      placeholder="Найти город из списка"
      v-if="Object.keys(selectedItem).length === 0"
      ref="dropdowninput"
      v-model.trim="inputValue"
    />

    <!-- Dropdown Selected Input -->
    <input
      v-else
      @click="resetItem"
      class="dropdown-input input-block__input"
      type="text"
      name="city"
      :value="selectedItem.name"
    />

    <!-- Dropdown List -->
    <div class="dropdown-list" v-show="inputValue && apiLoaded">
      <div
        class="dropdown-item"
        v-show="itemVisible(item)"
        v-for="item in itemList"
        :key="item.name"
        @click="selectItem(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "dropdown-list",
  props: {},
  data() {
    return {
      selectedItem: {},
      inputValue: "",
      //local city list
      itemList: [
        {
          updatedAt: 1635503582168,
          createdAt: 1587575824452,
          name: "Казань",
          id: "5ea07c10099b810b946c627a",
        },
        {
          updatedAt: 1587575867061,
          createdAt: 1587575867061,
          name: "Саратов",
          id: "5ea07c3b099b810b946c627b",
        },
        {
          updatedAt: 1633210751464,
          createdAt: 1610987769457,
          name: "Санкт-Петербург",
          id: "6005b8f9ad015e0bb6997778",
        },
        {
          updatedAt: 1627312612415,
          createdAt: 1611744559500,
          name: "Уфа",
          id: "6011452fad015e0bb6997e1d",
        },
        {
          updatedAt: 1623412953849,
          createdAt: 1622973004811,
          name: "Москва",
          id: "60bc9a4c2aed9a0b9b82fcb3",
        },
        {
          updatedAt: 1629974715128,
          createdAt: 1624696019457,
          name: "Краснодар",
          id: "60d6e4d32aed9a0b9b84fa82",
        },
        {
          updatedAt: 1625498815763,
          createdAt: 1625498815763,
          name: "Городской",
          id: "60e324bf2aed9a0b9b84fc7d",
        },
        {
          updatedAt: 1634056299514,
          createdAt: 1628758690202,
          name: "Город X",
          id: "6114e2a22aed9a0b9b85083e",
        },
        {
          updatedAt: 1630250653585,
          createdAt: 1630250653585,
          name: "Омск",
          id: "612ba69d9036850bb6e3e7b9",
        },
        {
          updatedAt: 1632519880492,
          createdAt: 1632519880492,
          name: "Самара",
          id: "614e46c818f5c2264119aeeb",
        },
        {
          updatedAt: 1633180728873,
          createdAt: 1633180728873,
          name: "Сочи",
          id: "61585c3818f5c2264119b859",
        },
        {
          updatedAt: 1633329704978,
          createdAt: 1633295634986,
          name: "Саранск",
          id: "615a1d1218f5c2264119b91a",
        },
        {
          updatedAt: 1634055201858,
          createdAt: 1634053959169,
          name: "Ульяновcк",
          id: "6165af4718f5c2264119c33e",
        },
        {
          updatedAt: 1635517715561,
          createdAt: 1635517688215,
          name: "Орск",
          id: "617c04f8ac4e7e1c84ab881f",
        },
      ],
      apiLoaded: true,
      // itemList: [], //для хранения данных из API
      // apiLoaded: false,
      // apiUrl: "http://api-factory.simbirsoft1.com/api/db/city", //url API Simbirsoft
    };
  },
  // mounted() {
  //   this.getList();
  // },
  methods: {
    resetItem() {
      this.selectedItem = {};
      this.$nextTick(() => this.$refs.dropdowninput.focus());
      this.$emit("on-item-reset");
    },
    selectItem(theItem) {
      this.selectedItem = theItem;
      this.inputValue = "";
      this.$emit("on-item-selected", theItem);
    },
    itemVisible(item) {
      let currentName = item.name.toLowerCase();
      let currentInput = this.inputValue.toLowerCase();
      return currentName.includes(currentInput);
    },

    // getList() {
    //   axios.get(this.apiUrl).then((response) => {
    //     this.itemList = response.data;
    //     this.apiLoaded = true;
    //   });
    // },

    // getlist() {
    //   return axios(this.apiUrl, {
    //     method: "GET",
    //     headers: {
    //       "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
    //     },
    //   })
    //     .then((response) => {
    //       this.itemList = response.data;
    //       this.apiLoaded = true;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       return error;
    //     });
    // },
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.dropdown {
  position: relative;
}

.input-wrp {
  padding: 7px 0;
}

.input-block__label {
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color;
  margin: 0 5px 0 0;
}

.input-block__input {
  width: 224px;
  border: none;
  border-bottom: 1px solid $color-grey;
}

// .dropdown-input{
//   width: 100%;
//   padding: 10px 16px;
//   border: 1px solid transparent;
//   background: #edf2f7;
//   line-height: 1.5em;
//   outline: none;
//   border-radius: 8px;
// }

.dropdown-list {
  position: absolute;
  width: 100%;
  max-height: 500px;
  margin-top: 4px;
  overflow-y: auto;
  background: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.dropdown-item {
  display: flex;
  width: 100%;
  padding: 11px 16px;
  cursor: pointer;
}
.dropdown-item:hover {
  background: #edf2f7;
}
</style>
