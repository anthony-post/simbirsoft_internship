<template>
  <div class="dropdown input-wrp">
    <label class="input-block__label" for="city">Город</label>
    <!-- Dropdown Input -->
    <input
      class="dropdown-input input-block__input"
      type="text"
      name="city"
      placeholder="Найти город из списка"
      v-if="isItemSelected"
      v-model.trim="inputValue"
    />

    <!-- Dropdown Selected Input -->
    <input
      v-else
      @click="resetSelection"
      class="dropdown-input input-block__input"
      type="text"
      name="city"
      :value="selectedItem.name"
    />

    <!-- Dropdown List -->
    <div class="dropdown-list" v-show="inputValue">
      <div
        class="dropdown-item"
        v-show="itemVisible(item)"
        v-for="item in CITYLIST.data.data"
        :key="item.id"
        @click="selectItem(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"; //API
import { mapState } from "vuex";

export default {
  name: "dropdown-list",
  props: {},
  data() {
    return {
      inputValue: "", //введенный город
    };
  },
  created() {
    this.GET_CITYLIST_FROM_API();
  },
  computed: {
    ...mapGetters(["CITYLIST"]),

    //проверка объекта пустой или нет
    isItemSelected() {
      return Object.keys(this.selectedItem).length === 0;
    },

    //получаем состояние объекта (в который записывается выбранный город) из store
    ...mapState({
      selectedItem: (state) => state.selectedCity,
    }),
  },
  methods: {
    ...mapActions(["GET_CITYLIST_FROM_API"]),

    //обнуляем состояние объекта при клике на input
    resetSelection() {
      this.$store.state.selectedCity = {};
    },

    //записываем выбранный объект в selectedCity в store
    selectItem(chosenItem) {
      this.$store.state.selectedCity = chosenItem;
      this.inputValue = ""; //обнуляем для того, чтобы список городов полученный по API не отображался по-умолчанию
    },

    //если введенный город соответствует тому который есть в списке городов полученного по API, то возвращается схожий город
    itemVisible(item) {
      let currentName = item.name.toLowerCase();
      let currentInput = this.inputValue.toLowerCase();
      return currentName.includes(currentInput);
    },
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
