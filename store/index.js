export const state = () => ({
  redirect: false
});

export const mutations = {
  success(state) {
    state.redirect = true;
  },
  error(state) {
    state.redirect = false;
  }
};
