import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAIjH0HuvNlF-2n0SdIKxbq7-olrlL2Yrw",
  authDomain: "dhaka-explore-guide-118ab.firebaseapp.com",
  databaseURL: "https://dhaka-explore-guide-118ab.firebaseio.com",
  projectId: "dhaka-explore-guide-118ab",
  storageBucket: "dhaka-explore-guide-118ab.appspot.com",
  messagingSenderId: "970010929650",
  appId: "1:970010929650:web:0b900e0573ed10bd34a36b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
