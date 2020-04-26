import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyD2jW6TRVExv50LB4NnhLR8Zv4RkUcb0is",
  authDomain: "thetrouxa-29a62.firebaseapp.com",
  databaseURL: "https://thetrouxa-29a62.firebaseio.com",
  projectId: "thetrouxa-29a62",
  storageBucket: "thetrouxa-29a62.appspot.com"
};

if (firebase.apps.length === 0) {
  console.log("success");
  firebase.initializeApp(config);
}

export default firebase;
