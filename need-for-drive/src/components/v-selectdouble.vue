<template>
  <div class="select">
    <div class="select__text pretext">{{ pretext }}</div>
    <div>
      <p
        class="select__title select__text"
        :class="{ placeholder: selected === 'Введите дату и время...' }"
      >
        <!--делает видимым/скрытым список с опциями-->
        <span @click="areOptionsVisible = !areOptionsVisible"
          >{{ selected }} {{ selected2 }}</span
        >
        <span v-if="selected !== 'Введите дату и время...'" @click="resetOption"
          ><vicon icon-id="icon-cross" width="8" height="8"
        /></span>
      </p>
      <!--Option list-->
      <div class="select__options" v-if="areOptionsVisible">
        <!--по-умолчанию блок с опциями НЕ виден-->
        <div>
          <p
            v-for="option in options"
            :key="option.id"
            @click="selectOption(option)"
          >
            <!--обработчик клика по опции из списка-->
            {{ option.dateString }}
          </p>
        </div>
        <div>
          <p
            v-for="option2 in options2"
            :key="option2.id"
            @click="selectOption2(option2)"
          >
            <!--обработчик клика по опции из списка-->
            {{ option2.dateString }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vicon from "@/components/v-icon.vue";

export default {
  name: "v-select",
  components: {
    Vicon,
  },
  props: {
    options: {
      type: Array, //для передачи опций ДАТЫ из родителя
      default() {
        return [];
      },
    },
    options2: {
      type: Array, //для передачи опций ВРЕМЕНИ из родителя
      default() {
        return [];
      },
    },
    selected: {
      type: String, //для передачи значения ДАТЫ по-умолчанию из родителя
      default: "",
    },
    selected2: {
      type: String, //для передачи значения ВРЕМЕНИ по-умолчанию из родителя
      default: "",
    },
    pretext: {
      type: String, //для передачи префикса из родителя
      default: "",
    },
  },
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option); //проталкиваем выбранную опцию в родительский компонент
      this.areOptionsVisible = true;
    },
    selectOption2(option2) {
      this.$emit("select2", option2); //проталкиваем выбранную опцию в родительский компонент
      this.areOptionsVisible = false; //делаем невидимым список с опциями
    },
    hideSelect() {
      this.areOptionsVisible = false; //делает невидимым список с опциями
    },
    resetOption() {
      this.$emit("reset");
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.select {
  position: relative;
  cursor: pointer;
  display: flex;
}

.select__title {
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 224px;
  border: none;
  border-bottom: 1px solid $color-grey;
}

.select__text {
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color;
}

.pretext {
  margin-right: 10px;
}

.placeholder {
  margin-left: 0;
  color: $color-grey;
}

.select__options {
  border: 0.5px solid #efeeec;
  position: absolute;
  top: 20px;
  left: 20px;
  right: 0;
  width: 100%;
  background: #ffffff;
  text-align: center;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: scroll;
  height: 20vh;
}

.select__options p {
  text-align: center;
}

.select__options p:hover {
  background: #edf2f7;
}
</style>
