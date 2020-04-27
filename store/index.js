export const state = () => ({
  redirect: false,
  text: null
});

export const mutations = {
  success(state) {
    state.redirect = true;
  },
  error(state) {
    state.redirect = false;
  }
};
