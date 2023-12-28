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

var parent = document.getElementById("parent");
var exampleModal1 = document.getElementById("exampleModal1");

var myModal = new bootstrap.Modal(document.getElementById("exampleModal1"), {
  keyboard: false,
});

console.log(myModal);

window.addEventListener("load", async function () {
  console.log("blog load");
  var uid = localStorage.getItem("uid");
  console.log(uid, "uid");

  if (!uid) {
    location.replace("./index.html");
    return;
  }
  var BlogArr = [];
  const querySnapshot = await getDocs(collection(db, "blogs"));
  querySnapshot.forEach(function (doc) {
    // console.log(doc.data().tilte);
    // console.log(doc.id);
    // BlogArr.push(doc.data());
    BlogArr.push({
      tilte: doc.data().tilte,
      desc: doc.data().desc,
      uid: doc.data().uid,
      image: doc.data().image,
      blogId: doc.id,
      isPrivate: doc.data().isPrivate,
    });
  });
  // console.log(BlogArr, "BlogArr");

  // for of loop

  for (var value of BlogArr) {
    // renderCardUI(title, desc, image, id)

    console.log(value.isPrivate, "BlogArr value");
    if (value.isPrivate) {
      if (value.uid === uid) {
        parent.innerHTML += renderCardUI(
          value.tilte,
          value.desc,
          value.image,
          value.blogId,
          value.isPrivate
        );
      }
    } else {
      parent.innerHTML += renderCardUI(
        value.tilte,
        value.desc,
        value.image,
        value.blogId,
        value.isPrivate
      );
    }
  }
});

async function createBlog() {
  console.log("createBlog");
  var title = document.getElementById("title");
  var desc = document.getElementById("desc");
  var uid = localStorage.getItem("uid");
  var privatePost = document.getElementById("privatePost").checked;

  var blogObj = {
    tilte: title.value,
    desc: desc.value,
    uid: uid,
    image: "",
    isPrivate: privatePost,
  };

  const docRef = await addDoc(collection(db, "blogs"), blogObj);

  parent.innerHTML += renderCardUI(
    title.value,
    desc.value,
    "",
    docRef.id,
    privatePost
  );
  myModal.hide();
  title.value = "";
  desc.value = "";
  console.log("docRef", docRef);
}

function renderCardUI(title, desc, image, id, isPrivate) {
  console.log("UI isPrivate", isPrivate);

  var lockValue = "";
  if (isPrivate) {
    lockValue = `<i class="fa-solid fa-lock"></i>`;
  } else {
    lockValue = "";
  }

  var UI = `<div class="card" style="width: 18rem">
  <img
    src="https://picsum.photos/300/200"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title"> ${title} ${lockValue}  </h5>
    <p class="card-text">
      ${desc}
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

  return UI;
}

//assign function
window.createBlog = createBlog;
