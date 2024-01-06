import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {
  getDownloadURL,
  ref,
  storage,
  uploadBytesResumable,
} from "./firebase.js";

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
  var blogImage = document.getElementById("blogImage");
  var imageURL;

  if (blogImage.files[0]) {
    imageURL = await imageUpload(blogImage.files[0]);
  } else {
    imageURL = "https://picsum.photos/200/300";
  }

  // var imageURL = await imageUpload(blogImage.files[0]);
  // console.log("imageURL", imageURL);
  // console.log("createBlog");
  var title = document.getElementById("title");
  var desc = document.getElementById("desc");
  var uid = localStorage.getItem("uid");
  var privatePost = document.getElementById("privatePost").checked;

  var blogObj = {
    tilte: title.value,
    desc: desc.value,
    uid: uid,
    image: imageURL,
    imageName : blogImage.files[0].name,
    isPrivate: privatePost,
  };

  const docRef = await addDoc(collection(db, "blogs"), blogObj);

  parent.innerHTML += renderCardUI(
    title.value,
    desc.value,
    imageURL,
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
    src=${image}
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

function imageUpload(file) {
  return new Promise(function (resolve, reject) {
    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: "image/jpeg",
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          resolve(downloadURL);
        });
      }
    );
  });
}

//assign function
window.createBlog = createBlog;
