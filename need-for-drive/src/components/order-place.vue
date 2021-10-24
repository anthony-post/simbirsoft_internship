<template>
  <div>
    <div class="input-block">
      <div class="input-wrp">
        <label class="input-block__label" for="city">Город</label>
        <input class="input-block__input" type="text" id="city" />
      </div>
      <div class="input-wrp">
        <label class="input-block__label" for="address">Пункт выдачи</label>
        <input
          class="input-block__input"
          type="text"
          id="address"
          placeholder="Начните вводить пункт ..."
        />
      </div>
    </div>
    <p class="place__text">Выбрать на карте</p>
    <div class="place__pic">
      <img src="../assets/map.jpg" alt="карта" />
    </div>
  </div>
</template>

<script>
export default {
  name: "order-place",
};
</script>
