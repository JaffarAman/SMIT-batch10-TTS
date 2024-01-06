import {
  getDocs,
  collection,
  db,
  query,
  where,
  deleteDoc,
  doc,
} from "./firebase.js";

var parent = document.getElementById("parent");
window.addEventListener("load", async function () {
  console.log("blog load");
  var uid = localStorage.getItem("uid");
  console.log(uid, "uid");

  if (!uid) {
    location.replace("./index.html");
    return;
  } else {
    // var BlogArr = [];
    // const querySnapshot = await getDocs(collection(db, "blogs"));
    // querySnapshot.forEach(function (doc) {
    //   if (uid === doc.data().uid) {
    //     BlogArr.push({
    //       tilte: doc.data().tilte,
    //       desc: doc.data().desc,
    //       uid: doc.data().uid,
    //       image: doc.data().image,
    //       blogId: doc.id,
    //       isPrivate: doc.data().isPrivate,
    //     });
    //   }
    // });
    // console.log(BlogArr, "BlogArr");

    // Create a query against the collection.
    var q = query(collection(db, "blogs"), where("uid", "==", uid));

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot, "querySnapshot");
    var myBLogArr = [];
    querySnapshot.forEach(function (doc) {
      console.log(doc.data(), "myBLogs data");
      var data = doc.data();
      myBLogArr.push({
        tilte: data.tilte,
        desc: data.desc,
        uid: data.uid,
        image: data.image,
        blogId: doc.id,
        isPrivate: data.isPrivate,
      });
    });
    console.log(myBLogArr, "myBLogArr");
    if (myBLogArr.length > 0) {
      for (var value of myBLogArr) {
        // renderCardUI(title, desc, image, id)
        parent.innerHTML += renderCardUI(
          value.tilte,
          value.desc,
          value.image,
          value.blogId,
          value.isPrivate
        );
      }
    } else {
      parent.innerHTML = "<h1>NO BLOG FOUND</h1>";
    }
  }
});

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

      <button class="btn btn-danger" id=${id}  onclick="deleteBlog(this)" >DELETE</button>
      <button class="btn btn-info"  id=${id} onclick="editBlog(this)" >EDIT</button>
      </div>
  </div>`;

  return UI;
}

async function deleteBlog(ele) {
  //   console.log("deleteBlog" , ele.id);
  var blogId = ele.id;
  await deleteDoc(doc(db, "blogs", blogId));
}

function editBlog() {
  console.log("editBlog");
}

function logoutFunction() {
  localStorage.clear();
  window.location.replace("./index.html");
}

window.deleteBlog = deleteBlog;
window.editBlog = editBlog;
window.logoutFunction = logoutFunction;
var arr = {};
