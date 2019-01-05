import firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyDwFtV2JFCf7EvRmI98LqgKy-M25pcXpBo",
  authDomain: "couponnhch.firebaseapp.com",
  databaseURL: "https://couponnhch.firebaseio.com",
  projectId: "couponnhch",
  storageBucket: "couponnhch.appspot.com",
  messagingSenderId: "810956656063"
};

const fire = firebase.initializeApp(config);

export default fire;
