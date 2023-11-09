// console.log("HELLO WORLD")



var username = document.getElementById("username")
var para = document.getElementById("para")

function setValue() {
    username.value = "JAFFAR AMAN"

    console.log("setValue", username.value)
}


function getValue() {
    console.log("getValue", username.value)
}


function setPara() {
    console.log("para", para.innerHTML)
    para.innerHTML = "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by technologies such as Cascadi"
}


function getPara() {
    console.log("para", para.innerHTML)

}


function mouseOverEvent(ele, toggle) {
    console.log("toggle", toggle)
    if (toggle == "in") {
        ele.src = "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?cs=srgb&dl=pexels-mike-bird-3729464.jpg&fm=jpg"

    } else {
        ele.src = "https://cdn.motor1.com/images/mgl/NGGZon/s3/koenigsegg-gemera.jpg"
    }
}



function validateInput() {

    var userInput = document.getElementById("userInput")
    console.log("userInput", userInput)
    // userInput.style.background = "red"
    if (userInput.value.length < 3) {
        // alert("Enter correct name")
        userInput.style.border = "1px solid red"
    } else {
        console.log("Correct value")
        userInput.style.border = "1px solid green"

    }
}



function focusInput() {
    console.log('focus.......')
}