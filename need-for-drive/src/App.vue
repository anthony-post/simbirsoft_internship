<template>
  <div class="wrapper">
    <vsidebar />
    <router-view />
  </div>
</template>

<script>
import Vsidebar from "@/components/v-sidebar.vue";

export default {
  components: {
    Vsidebar,
  },
};
</script>

<style lang="scss"></style>
