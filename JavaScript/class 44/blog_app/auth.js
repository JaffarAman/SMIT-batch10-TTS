import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM9qGI-sUJr36CJjDcv2sx82PTOEJ_L9s",
  authDomain: "smitbatch10.firebaseapp.com",
  projectId: "smitbatch10",
  storageBucket: "smitbatch10.appspot.com",
  messagingSenderId: "573491351148",
  appId: "1:573491351148:web:6da9d535d4b837210fd249",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function signupFunc() {
  console.log("signupFunc");
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(function (success) {
      console.log(success, "success");
    })
    .catch(function (error) {
      console.log(error, "error");
    });
}

function loginFunc() {
  console.log("loginFunc");
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(function (success) {
      console.log(success, "success");
    })
    .catch(function (error) {
      console.log(error, "error");
    });
}

///function assign
window.signupFunc = signupFunc;
window.loginFunc = loginFunc;
