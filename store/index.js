import firebase from "@/plugins/firebase";

// import { STORE_TEXT, GET_TEXT } from "./actions";

const db = firebase.database();
const textsRef = db.ref("texts");

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
  },
  getText(state) {}
};
