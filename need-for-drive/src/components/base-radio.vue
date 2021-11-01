<template>
  <div class="radio__item">
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
  },
};
</script>
