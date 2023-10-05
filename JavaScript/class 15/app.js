// console.log("HELLO WORLD")

// // var cities = ["lahore", "karachi", "islamabad"]
// var cities = ["lahore", "delhi", "islamabad"]

// var isMatch = false


// for (var i = 0; i < cities.length; i++) {
//     if (cities[i] === "karachi") {
//         isMatch = true
//         alert("Welcome city of light")
//         break
//     }

// }

// if (isMatch === false) {
//     alert("Karachi not exist")

// }





// nested loop


// for (var i = 1; i <= 5; i++) {
//     console.log("i , outer loop", i)
//     for (var j = 1; j <= 2; j++) {
//         console.log("j inner loop ",)
//     }
// }
// var i = 0
// for( i ; i<10 ;i++){

// }


// String
// Number
// Boolean
// undefined
// null

// Array
// Object
// function


// var arr = ["karachi", "lahore", true, undefined, null, 215641215]


var arr = [
    ["karachi", "pakistan"],
    ["delhi", "India"],
    ["lahore", "pakistan"]
]

// console.log(arr[0][0])  // 0 row 0 col
// console.log(arr[0][1])  // 0 row 1 col
// console.log(arr[1][0])
// console.log(arr[1][1])

for (var row = 0; row < arr.length; row++) {
    // console.log(arr[row]) // ["karachi", "pakistan"],

    for (var col = 0; col < arr[row].length; col++) {
        console.log(arr[row][col])
    }


}
