export default ({ store, redirect }) => {
  if (!store.state.redirect) {
    return redirect("/");
  }
};
