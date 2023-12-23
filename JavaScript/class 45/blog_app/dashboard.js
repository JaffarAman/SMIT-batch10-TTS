import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

window.addEventListener("load", function () {
  console.log("blog load");
  var uid = localStorage.getItem("uid");
  console.log(uid, "uid");

  if (!uid) {
    location.replace("./index.html");
    return;
  }
});

async function createBlog() {
  console.log("createBlog");
  var title = document.getElementById("title").value;
  var desc = document.getElementById("desc").value;
  var uid = localStorage.getItem("uid");

  var blogObj = {
    tilte: title,
    desc: desc,
    uid: uid,
    image: "",
  };

  const docRef = await addDoc(collection(db, "blogs"), blogObj);
  console.log("docRef", docRef);
}

window.addEventListener("load", async function () {
  const querySnapshot = await getDocs(collection(db, "blogs"));
  querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`);
    console.log(doc.data())
  });
});

//assign function
window.createBlog = createBlog;
