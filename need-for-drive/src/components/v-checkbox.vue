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
      // Note that `true-value` and `false-value` are camelCase in the JS
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
/* Customize the label (the wrapper) */
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
/* Hide the browser's default checkbox */
.checkbox__input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
/* Create a custom checkbox */
.checkmark-box {
  position: absolute;
  top: 0;
  left: 0;
  height: 12px;
  width: 12px;
  //   border-radius: 2px;
  //   background-color: #eee;
  border: 1px solid $color-grey;
}
/* On mouse-over, add a grey background color */
.checkbox-item:hover input ~ .checkmark-box {
  border: 1px solid $color-text;
}
/* When the checkbox is checked, add a blue background */
.checkbox__input:checked ~ .checkmark-box {
  border: 1px solid $color-text;
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark-box:after {
  content: "";
  position: absolute;
  display: none;
}
/* Show the checkmark when checked */
.checkbox__input:checked ~ .checkmark-box:after {
  display: block;
}
/* Style the checkmark/indicator */
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
