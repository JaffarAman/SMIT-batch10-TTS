function validateInput() {

    console.log()
}

function focusMood(elem) {
    elem.style.border = "1px solid blue"
}

function blurMood(elem) {
    if (elem.value.length < 3) {
        elem.style.border = "1px solid red"

    } else {
        elem.style.border = "1px solid green"

    }
}


function submitHandler() {
    var username = document.getElementById("username")
    var helperText = document.getElementById("helperText")

    if (username.value.length >= 3) {
        helperText.innerHTML = "successfully submit!"
        helperText.style.color = "green"
    } else if (username.value.length < 3 && username.value.length > 0) {
        helperText.innerHTML = "Invalid username!"
        helperText.style.color = "red"
    } else {
        helperText.innerHTML = "Required field are missing!"
        helperText.style.color = "red"
    }


}

function pressEvent() {
    var elem = document.getElementById("username")

    console.log("value", elem.value)
    if (elem.value.length >= 3) {
        elem.style.border = " 1px solid green"
    }
    console.log("pressEvent()")
}



var parent = document.getElementById("parent")
function showBox() {
    parent.style.visibility = "visible";
    // parent.style.display = "block"

}
function hideBox() {
    // parent.style.display = "none"
    parent.style.visibility = "hidden";

}
function foo() {
    console.log("foo()")
}