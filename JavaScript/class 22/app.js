// console.log("HELLO WORLD")



// function addition(num1, num2) {
//     console.log(num1 + num2)
// }


// addition(50, 100)
// addition(200, 500)



// function addition(num1 = 0, num2 = 0) {
//     console.log(num1 + num2)
//     // console.log(num1)
//     // console.log(num2)
// }

// addition()


// function calc(num1, num2, opt) {
//     console.log(num1, num2, opt)
//     if (opt === "+") {
//         console.log(num1 + num2)
//         return num1 + num2
//     } else if (opt === "-") {
//         console.log(num1 - num2)
//         return num1 - num2
//     }
//     else if (opt === "*") {
//         console.log(num1 * num2)
//         return num1 * num2

//     }
//     else if (opt === "/") {
//         console.log(num1 / num2)
//         return num1 / num2
//     } else {
//         console.log("Invalid opt")
//         return "Invalid opt"

//     }
// }

// // user input num1 , num2 , opt

// var addition = calc(500, 300, "+")
// var wrong = calc(500, 300, "h")
// console.log("wrong", wrong)

// var fullName = "Jaffar Aman" // global variable's


// function foo() {
//     var fullName = "Jaffar Aman"  //local scope
//     console.log(fullName)
// }


// foo()
// console.log(fullName)


var fullName = "ALI"

var age = 22
function foo() {
    var fullName = "Jaffar Amam"
    age = 23
    console.log(fullName)
}


foo()

console.log("bahir hai function sy", fullName)