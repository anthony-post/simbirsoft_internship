<template>
  <div class="dropdown input-wrp">
    <label class="input-block__label" :for="name">{{ label }}</label>
    <!-- Dropdown Input -->
    <input
      class="dropdown-input input-block__input"
      type="text"
      :name="name"
      :placeholder="placeholder"
      v-if="isItemSelected"
      v-model.trim="inputValue"
    />
    <!-- Dropdown Selected Input -->
    <input
      v-else
      @click="resetSelection"
      class="dropdown-input input-block__input"
      type="text"
      :name="name"
      :value="selectedItem.name"
    />
    <!-- Dropdown List -->
    <div class="dropdown-list" v-show="inputValue">
      <div
        class="dropdown-item"
        v-show="itemVisible(item)"
        v-for="item in itemList"
        :key="item.id"
        @click="selectItem(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdown-list",
  props: {
    itemList: {
      type: Array,
      required: true,
    },
    selectedItem: {
      type: Object,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      inputValue: "", //введенное пользователем значение
    };
  },
  computed: {
    //проверка объекта в props selectedItem пустой или нет
    isItemSelected() {
      return Object.keys(this.selectedItem).length === 0;
    },
  },
  methods: {
    //обнуляем состояние объекта props selectedItem при клике на input
    resetSelection() {
      // this.selectedItem = {};
      this.$emit("on-item-reset");
    },
    //записываем выбранный объект в props selectedItem
    selectItem(chosenItem) {
      // this.selectedItem = chosenItem;
      this.inputValue = ""; //обнуляем для того, чтобы список городов полученный по API не отображался по-умолчанию
      this.$emit("on-item-selected", chosenItem);
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
