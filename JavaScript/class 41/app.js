// var arr = ["10", 20, "30"]
// var obj = {
//     name: "Jaffar"
// }

// localStorage.setItem("arr", arr)
// localStorage.setItem("obj", obj)


// var obj = {
//     name: "jaffar"
// }

// var strObj = JSON.stringify(obj)

// localStorage.setItem("obj", strObj)

// var getObj = localStorage.getItem("obj")
// JSON.parse(getObj)







function signup() {
    var username = document.getElementById("username")
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    var userObj = {
        name: username.value,
        email: email.value,
        password: password.value
    }

    var getUsers = localStorage.getItem("users")

    // first user 
    if (getUsers === null) {
        localStorage.setItem("users", JSON.stringify([userObj]))
        alert("User successfully signup")
        window.location.assign("./index.html")

    }
    // after first user
    else {
        var userParse = JSON.parse(getUsers)
        console.log(userParse, "userParse")

        var emailCheck = userParse.find(function (value, index) {
            // console.log(value, index)
            if (value.email === userObj.email) {
                return true
            }
        })

        if (emailCheck === undefined) {
            userParse.push(userObj)
            localStorage.setItem("users", JSON.stringify(userParse))
            alert("User successfully signup")
            window.location.assign("./index.html")


        } else {
            alert("email address already exists!")
        }
        // console.log("findValue", findValue)

    }

    // console.log(userObj)

    // localStorage.setItem("users", JSON.stringify(userObj))


}


function login() {
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    // if (!email.value || !password.value) {
    //     alert("required fields are missing")
    //     return
    // }

    // get localStorage users collection
    var userCollection = JSON.parse(localStorage.getItem("users"))
    console.log("userCollection", userCollection)

    var userExist = userCollection.find(function (value, index) {
        console.log("value", value.email)

        if (value.email === email.value && value.password === password.value) {
            return value
        }
    })

    if (!userExist) {
        alert("email OR password invalid")
        return
    } else {
        alert("successfully login")
        localStorage.setItem("userLogin", JSON.stringify(userExist))
        window.location.replace("./dashboard.html")
    }





    console.log("emailExist", userExist)



}





// dashboard.js
var userDetails = null
function isUserLogin() {
    console.log("isUserLogin")
    var getUsers = JSON.parse(localStorage.getItem("userLogin"))
    console.log("getUsers", getUsers)
    if (getUsers === null) {
        userDetails = getUsers

        window.location.replace("./index.html")
    }
}

function loadAuthScreen() {
    var getUsers = JSON.parse(localStorage.getItem("userLogin"))
    console.log("getUsers", getUsers)

    if (getUsers !== null) {
        window.location.replace("./dashboard.html")
    }
}

