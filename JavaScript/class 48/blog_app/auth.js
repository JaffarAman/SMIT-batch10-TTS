import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { db, doc, getDoc, setDoc } from "./firebase.js";

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
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var phoneNum = document.getElementById("phoneNum");

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(async function (success) {
      console.log(success, "success");

      // store user in firebase firestore
      var userObj = {
        user_id: success.user.uid,
        email: email.value,
        firstName: firstName.value,
        lastName: lastName.value,
        phoneNum: phoneNum.value,
      };

      // Add a new document in collection "cities"
      await setDoc(doc(db, "users", success.user.uid), userObj);

      alert("successfully signup");
      window.location.href = "./index.html";
      // generate auto docs id
      // addDoc(collection(db, "collectionName") , userObj)
    })
    .catch(function (error) {
      console.log(error.code, "error");
      alert(error.code);
    });
}

function loginFunc() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(async function (success) {
      console.log(success, "success");

      // user Data get
      var docRef = doc(db, "users", success.user.uid);
      var docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        localStorage.setItem("uid", success.user.uid);
        localStorage.setItem("userData", JSON.stringify(docSnap.data()));
        alert("successfully login");
        window.location.replace("./dashboard.html");
      } else {
        alert("SomeThing went wrong~");
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      var userData;
    })
    .catch(function (error) {
      console.log(error.code, "error");
      alert(error.code);
    });
}

window.addEventListener("load", function () {
  console.log("blog load");
  var uid = localStorage.getItem("uid");
  console.log(uid, "uid");

  if (uid) {
    location.replace("./dashboard.html");
    return;
  }
});

///function assign
window.signupFunc = signupFunc;
window.loginFunc = loginFunc;
