<!--TO DO-->
<template>
  <div class="total">
    <p class="total__title">Ваш заказ:</p>
    <div>
      <p class="total__text">
        Пункт выдачи___<span>{{ name }}</span>
      </p>
    </div>
    <p class="total__price">Цена:</p>
    <button class="total__button">Выбрать модель</button>
  </div>
</template>

<script>
export default {
  name: "v-total",
  props: ["name"],
};
</script>
