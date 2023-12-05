// console.log("HELLO WORLD...")


// Array of objects
// var stdArr = [
//     {
//         name: "Jaffar Aman",
//         age: 22,
//         email: "jaffar@gmail.com"
//     },
//     {
//         name: "Muhammad Sufiyan",
//         age: 34,
//         email: "sufiyan@gmail.com"
//     },
//     {
//         name: "Bilal Rehman",
//         age: 26,
//         email: "bilal@gmail.com"

//     },

// ]


// var userTable = document.getElementById("userTable")

// for (var i = 0; i < stdArr.length; i++) {
//     // console.log("Start")
//     // console.log(stdArr[i].name)
//     // console.log(stdArr[i].age)
//     // console.log(stdArr[i].email)
//     // console.log("END")
//     var name = stdArr[i].name
//     var age = stdArr[i].age
//     var email = stdArr[i].email

//     var rowHTML = "<tr><td>" + name + "</td><td>" + age + "</td><td>" + email + "</td></tr>"
//     userTable.innerHTML += rowHTML
// }

// var userName = document.getElementById("userName")
// var userName = document.querySelectorAll(".userName")
// var userName = document.querySelector("#userName")
// console.log(userName, "userName")
// var userHeading = document.getElementById("userHeading")
// console.log("userHeading", userHeading)
// if (userHeading) {
//     userHeading.innerHTML = userName.value


// }



// function aboutPage() {
//     console.log(userName.value)
//     window.location.assign("./about.html")

//     console.log("aboutPage()")

// }


this

function aboutPage() {
    var userName = document.getElementById("userName")
    console.log("userName", userName.value)
    window.localStorage.setItem("userName", userName.value)
    location.assign("./about.html")


    // localStorage always save value string data types

    // localStorage.setItem("key", "value")
    // localStorage.getItem("key")
    // localStorage.removeItem("key")
    // localStorage.clear()

}


function aboutLoad() {
    console.log("aboutLoad")
}