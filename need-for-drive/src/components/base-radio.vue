<!--TO DO-->
<template>
  <div class="radio__item">
    <!-- <input
      class="radio__input"
      type="radio"
      :checked="modelValue === value"
      :value="value"
      v-bind="$attrs"
      @change="$emit('update:modelValue', value)"
    /> -->
    <input class="radio__input" type="radio" name="cars" />
    <label for="cars" v-if="label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    // modelValue: {
    //   type: [String, Number],
    //   default: "",
    // },
    // value: {
    //   type: [String, Number],
    //   required: true,
    // },
    checkedCategoryCars: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
