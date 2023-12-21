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
  updateDoc,
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

  // console.log(createCardUI(noteInput.value, docRef.id));
  var UI = createCardUI(noteInput.value, docRef.id);

  parent.innerHTML += UI;
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
    var UI = createCardUI(tempArr[i].todoValue, tempArr[i].id);
    parent.innerHTML += UI;
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

function createCardUI(inputValue, id) {
  var listUI = `<div class="card">
  <div class="card-header">
      Note
  </div>
  <div class="card-body">
      <h5 class="card-title">${inputValue}</h5>
      <div class="mt-3  buttonContainer">
          <button class="btn btn-primary" id='${id}'  onclick='editTodo(this)' >EDIT</button>
          <button class="btn btn-danger" id='${id}' onclick='deleteTodo(this)'  >Delete </button>
      </div>

  </div>
</div>`;

  return listUI;
}

async function editTodo(ele) {
  var oldValue = ele.parentNode.previousElementSibling.innerHTML;
  var id = ele.id;
  var editValue = prompt("Enter value", oldValue);

  // Set the "capital" field of the city 'DC'
  await updateDoc(doc(db, "todos", id), {
    todo: editValue,
  });
  pageLoad();
}

window.editTodo = editTodo;
