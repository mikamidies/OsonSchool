<template>
  <div v-if="isVisible" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <h1 style="font-weight: 900;font-size: 40px;margin-bottom: 20px;">{{ title }}</h1>
      <p style="font-size: 20px;">{{ content }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";


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
      this.$store.commit("modal/closeModal");
    },
  },};
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
    background-color: #0E0E0E;
    color: #ffffff;
    padding: 50px;
    width: 900px;
    border-radius: 0px 60px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
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
</style>

