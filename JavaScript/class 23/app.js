// function foo(num1, num2) {
//     console.log("HELLO WORLD")
//     console.log(num1, num2)
// }
// foo()


// function getInputVale() {

//     var inputField = document.getElementById("username")
//     console.log(inputField.value)

// }


// function getFormValues() {
//     var firstNameInput = document.getElementById("firstName")
//     var lastNameInput = document.getElementById("lastName")
//     var ageInput = document.getElementById("age")

//     console.log(firstNameInput.value)
//     console.log(lastNameInput.value)
//     console.log(ageInput.value)


// function foo() {

//     console.log("hello world")


// }


// function setFormValues() {
//     var firstName = document.getElementById("firstName")
//     var lastName = document.getElementById("lastName")
//     var age = document.getElementById("age")

//     // console.log("firstname", firstName.value)

//     firstName.value = "SMIT"
//     lastName.value = "TECH"
//     age.value = "22"

// }






// function calc() {
//     var inputValue = document.getElementById("inputValue")
//     console.log("inputValue", inputValue.value)
//     var result = eval(inputValue.value)
//     console.log("result", result)
// }



function addValue(num) {
    console.log("number", num)

    var input = document.getElementById("input")

    input.value += num
    // input.value = input.value + num


}


function result() {
    var input = document.getElementById("input")

    console.log(input.value)

    var ans = eval(input.value)
    console.log(ans, "ans")
    input.value = ans
}


function clearValue() {
    var input = document.getElementById("input")
    console.log(input.value.slice(0, -1))
    input.value = input.value.slice(0, -1)
}

function clearAll() {
    var input = document.getElementById("input")
    input.value = ""
}