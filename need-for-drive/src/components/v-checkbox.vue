<template>
  <label class="checkbox-item">
    {{ label }}
    <input
      class="checkbox__input"
      type="checkbox"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
    />
    <span class="checkmark-box"></span>
  </label>
</template>

<script>
export default {
  model: {
    prop: "modelValue",
    event: "change",
  },
  props: {
    value: { type: String },
    modelValue: { default: "" },
    label: { type: String, required: true },
    trueValue: { default: true },
    falseValue: { default: false },
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      }
      return this.modelValue === this.trueValue;
    },
  },
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked;
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue];
        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }
        this.$emit("change", newValue);
      } else {
        this.$emit("change", isChecked ? this.trueValue : this.falseValue);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.checkbox-item {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 6px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color-grey;
}
.checkbox__input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark-box {
  position: absolute;
  top: 0;
  left: 0;
  height: 12px;
  width: 12px;
  border: 1px solid $color-grey;
}
.checkbox-item:hover input ~ .checkmark-box {
  border: 1px solid $color-text;
}
.checkbox__input:checked ~ .checkmark-box {
  border: 1px solid $color-text;
}
.checkmark-box:after {
  content: "";
  position: absolute;
  display: none;
}
.checkbox__input:checked ~ .checkmark-box:after {
  display: block;
}
.checkbox-item .checkmark-box:after {
  left: 5px;
  top: -3px;
  width: 5px;
  height: 10px;
  border: solid #121212;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
