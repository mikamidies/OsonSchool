export const state = () => ({
  isVisible: false,
  title: "",
  content: "",
});

export const mutations = {
  openModal(state, { title, content }) {
    state.isVisible = true;
    state.title = title;
    state.content = content;
  },
  closeModal(state) {
    state.isVisible = false;
    state.title = "";
    state.content = "";
  },
};
