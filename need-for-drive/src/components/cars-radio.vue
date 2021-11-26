<template>
  <div>
    <label class="wrapper flex items-center">
      <input
        class="checkbox"
        type="radio"
        :checked="isChecked"
        :value="car"
        @change="$emit('change', $event.target.value)"
      />
      <!-- <img
        class="checkmark"
        src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F2020-Chevrolet-Corvette-Stingray%2F960x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349"
        alt=""
      /> -->
      <p class="cars__model">{{ car.name }}</p>
      <p class="cars__price">{{ car.priceMin }} - {{ car.priceMax }} руб.</p>
      <img
        class="cars__img"
        :src="car.thumbnail.path"
        :alt="car.thumbnail.originalname"
      />
      <!-- <span class="checkmark"></span> -->
    </label>
  </div>
</template>

<script>
export default {
  model: {
    prop: "modelValue",
    event: "change",
  },
  props: {
    // label: {
    //   type: String,
    //   default: "",
    //   required: true,
    // },
    // modelValue: {
    //   default: "",
    // },
    modelValue: {
      type: Object,
      default: undefined,
    },
    // value: {
    //   type: String,
    //   default: undefined,
    // },
    car: {
      type: Object,
      default: undefined,
    },
  },
  computed: {
    // isChecked() {
    //   return this.modelValue == this.value;
    // },
    isChecked() {
      return this.modelValue == this.car;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

/* Customize the label (the wrapper) */
.wrapper {
  display: block;
  position: relative;
  /* padding-left: 35px; */
  /* margin-bottom: 6px; */
  cursor: pointer;
  /* font-size: 22px; */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* font-size: 16px; */

  width: 150px;
  height: 150px;
}

/* Hide the browser's default radio button */
.wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  /* height: 21px;
  width: 21px; */
  /* border-radius: 50%; */
  /* background-color: #eee; */
  /* border: 1px solid #ccc; */

  height: 150px;
  width: 150px;
}

/* On mouse-over, add a grey background color */
.wrapper:hover input ~ .checkmark {
  /* background-color: #ccc; */
  /* box-sizing: border-box; */
  border: 1px solid gray;
}

/* When the radio button is checked, add a blue background */
.wrapper input:checked ~ .checkmark {
  /* background-color: #1CD4A7; */
  box-sizing: border-box;
  border: 1px solid green;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
/*.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}*/

/* Show the indicator (dot/circle) when checked */
/*.wrapper input:checked ~ .checkmark:after {
  display: block;
}*/

/* Style the indicator (dot/circle) */
/*.wrapper .checkmark:after {
  top: 5px;
  left: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}*/
</style>
