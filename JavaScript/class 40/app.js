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
    }
    // after first user
    else {
        var userParse = JSON.parse(getUsers)
        console.log(userParse, "userParse")

        var findValue = userParse.find(function (value, index) {
            // console.log(value, index)
            if (value.email === userObj.email) {
                return true
            }
        })

        if (findValue === undefined) {
            userParse.push(userObj)
            localStorage.setItem("users", JSON.stringify(userParse))

        } else {
            alert("email address already exists!")
        }
        // console.log("findValue", findValue)

    }

    // console.log(userObj)

    // localStorage.setItem("users", JSON.stringify(userObj))


}