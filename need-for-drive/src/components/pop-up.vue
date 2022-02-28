<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <slot name="body"> Подтвердить заказ </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <router-link
                v-if="orderId"
                :to="{ name: 'v-orderid', params: { id: orderId } }"
                ><button class="modal-default-button" @click="confirmOrder">
                  Подтвердить
                </button>
              </router-link>
            </slot>
            <slot name="footer">
              <button
                class="modal-default-button button-colored"
                @click="closePopUp"
              >
                Вернуться
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions } from "vuex"; //API
import { mapState } from "vuex";

export default {
  name: "popup",
  computed: {
    ...mapState({
      orderId: (state) => state.orderId,
    }),
  },
  methods: {
    ...mapActions(["PUT_CONFIRM_ORDERID_TO_API"]),
    //TO DO confirm order
    confirmOrder() {
      this.PUT_CONFIRM_ORDERID_TO_API();
    },
    closePopUp() {
      this.$store.commit("RESET_POPUPCONFIRM");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 0 0 30px 0;
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: $color-title;
  text-align: center;
}

.modal-footer {
  text-align: center;
}

.modal-default-button {
  font-family: $ff;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: $color-white;
  background: linear-gradient(90deg, #0ec261 2.61%, #039f67 112.6%);
  background-blend-mode: darken;
  border-radius: 8px;
  border: none;
  padding: 15px 20px;
  background: $color-text;
  cursor: pointer;
  margin: 0 8px 0 0;
}

.modal-default-button:hover {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.button-colored {
  background: linear-gradient(90deg, #493013 0%, #7b0c3b 100%);
  border-radius: 4px;
  margin: 0 0 0 8px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
