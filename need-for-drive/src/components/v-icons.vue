<template>
  <svg :width="width" :height="height">
    <use :xlink:href="iconPath" />
  </svg>
</template>

<script>
import spriteUrl from "@/assets/sprite.svg";

export default {
  name: "VIcons",
  props: {
    iconId: {
      type: String,
      required: true,
    },
    width: {
      type: [Number, String],
      default: 32,
    },
    height: {
      type: [Number, String],
      default: 32,
    },
  },
  computed: {
    iconPath() {
      return `${spriteUrl}#${this.iconId}`;
    },
  },
};
</script>

<style lang="scss"></style>
