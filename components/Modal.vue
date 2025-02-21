<template>
  <transition name="modal">
    <div v-if="isVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h1 style="font-weight: 900; font-size: 40px; margin-bottom: 20px">
          {{ title }}
        </h1>
        <p style="font-size: 20px">{{ content }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      isVisible: (state) => state.modal.isVisible,
      title: (state) => state.modal.title,
      content: (state) => state.modal.content,
    }),
  },
  methods: {
    closeModal() {
      this.$store.commit('modal/closeModal')
    },
  },
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #0e0e0e;
  color: #ffffff;
  padding: 32px 48px;
  width: 100%;
  max-width: 50%;
  border-radius: 0px 60px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  border: 1px solid #ebebeb30;
}

.close-btn {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.2em;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
p {
  line-height: 140%;
  opacity: 0.9;
}
.modal-enter-active,
.modal-leave-active,
.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
.modal-enter .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9);
}
@media screen and (max-width: 1024px) {
  .modal-content {
    max-width: 90%;
    padding: 24px 33px;
    border-radius: 0 16px 0 16px;
  }
  h1 {
    font-size: 32px !important;
  }
  p {
    font-size: 16px !important;
    line-height: 150%;
  }
}
</style>
