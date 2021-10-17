<!--TO DO-->
<template>
  <div>
    <div class="input-block">
      <div class="input-wrp">
        <label class="input-block__label" for="city">Город</label>
        <input
          class="input-block__input"
          type="text"
          id="city"
          v-model="name"
          @click="save"
        />
      </div>
      <div class="input-wrp">
        <label class="input-block__label" for="delivery-point"
          >Пункт выдачи</label
        >
        <input
          class="input-block__input"
          type="text"
          id="delivery-point"
          placeholder="Начните вводить пункт ..."
        />
      </div>
    </div>
    <p class="place__text">Выбрать на карте</p>
    <img src="../assets/map.jpg" alt="карта" />
  </div>
</template>

<script>
export default {
  name: "v-order-place",
};
</script>
