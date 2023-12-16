// https://firebase.google.com/docs/web/setup
// https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js  ==>firestore

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
var app = initializeApp(firebaseConfig);
// console.log("app", app);

// Initialize Cloud Firestore and get a reference to the service
var db = getFirestore(app);

// console.log(app)
// console.log("db", db);

// var addDataBtn = document.getElementById("addDataBtn")
// // console.log("addDataBtn", addDataBtn)
// addDataBtn.addEventListener("click", addData)

// function addData() {
//     var userObj = {
//         name: "Muhammad Sufiyan"
//     }
//     console.log("userObj", userObj)

//     addDoc(collection(db, "users"), userObj)

//     // console.log(response, "response")
// }

// async function getData() {

//     // const querySnapshot = await getDocs(collection(db, "users"))
//     // // querySnapshot.forEach((doc) => {
//     // //     // console.log(`${doc.id} => ${doc.data()}`);
//     // // });
//     // querySnapshot.forEach(function (doc) {
//     //     console.log(doc.data())
//     // })

//     const querySnapshot = await getDocs(collection(db, "users"));
//     querySnapshot.forEach(function (doc) {
//         console.log(doc.data(), doc.id)
//     });

// }

// getData()

// // addData()

var addNote = document
  .getElementById("addNote")
  .addEventListener("click", addNoteFn);

var parent = document.getElementById("parent");

async function addNoteFn() {
  var noteInput = document.getElementById("noteInput");
  console.log("addNoteFn");
  console.log("noteInput", noteInput);

  var todoObj = {
    todo: noteInput.value,
  };
  var docRef = await addDoc(collection(db, "todos"), todoObj);
  console.log("docRef", docRef.id);

  var listUI = `<div class="card">
    <div class="card-header">
        Note
    </div>
    <div class="card-body">
        <h5 class="card-title">  ${noteInput.value}  </h5>
        <div class="mt-3  buttonContainer">
            <button class="btn btn-primary">Edit</button>
            <button class="btn btn-danger" id='${docRef.id}' onclick='deleteTodo(this)'  >Delete </button>
        </div>

    </div>
</div>`;

  console.log(listUI);
  parent.innerHTML += listUI;
  noteInput.value = "";
}

window.addEventListener("load", pageLoad);

async function pageLoad() {
  //   console.log("load");
  parent.innerHTML = "";
  var tempArr = [];
  const querySnapshot = await getDocs(collection(db, "todos"));
  querySnapshot.forEach(function (doc) {
    console.log(doc.data().todo);
    console.log(doc.id, "collection id");
    tempArr.push({
      id: doc.id,
      todoValue: doc.data().todo,
    });
  });

  console.log("tempArr", tempArr);
  for (var i = 0; i < tempArr.length; i++) {
    parent.innerHTML += `<div class="card">
        <div class="card-header">
            Note
        </div>
        <div class="card-body">
            <h5 class="card-title">  ${tempArr[i].todoValue}  </h5>
            <div class="mt-3  buttonContainer">
                <button class="btn btn-primary">Edit</button>
                <button class="btn btn-danger" id='${tempArr[i].id}' onclick='deleteTodo(this)'  >Delete </button>
            </div>
    
        </div>
    </div>`;
  }
}

async function deleteTodo(ele) {
  //   console.log("deleteTodo()", ele);
  var docID = ele.id;
  console.log(docID, "docID");
  await deleteDoc(doc(db, "todos", docID));
  pageLoad();
}

window.deleteTodo = deleteTodo;

// async function editTodo() {
//   var editValue = prompt("Enter value");

//   const washingtonRef = doc(db, "cities", "DC");

//   // Set the "capital" field of the city 'DC'
//   await updateDoc(washingtonRef, {
//     todo: editValue,
//   });
// }
