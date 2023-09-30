// console.log("HELLO WORLD")


// console.log(1)

// for (var i = 1; i <= 10; i++) {
//     console.log(i)
// }



// var arr = ["karachi", "lahore", "multan", "delhi", "london", "mumbai"]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])


// document.write("city 1 ", arr[0] + "<br />")
// document.write("city 2 ", arr[1] + "<br />")
// document.write("city 3 ", arr[2] + "<br />")


// for (var i = 0; i < arr.length; i++) {
//     document.write("city " + (i + 1) + arr[i] + "<br />")
// }




// for (var i = 1; i <= 10; i++) {



//     console.log("i", i)

//     if (i == 5) {
//         break
//     }

//     // if (i == 50) {
//     //     console.log("i value ", i)
//     // }

//     // break


// }





// break
// continue

// for (var i = 1; i <= 10; i++) {
//     if (i == 5) {
//         continue
//     }

//     console.log("hello world", i)
// }







// var cities = ["karachi", "lahore", "multan", "delhi", "dhaka", "mumbai"]


// if (cities[0] === "karachi") {
//     console.log("city of light")
// } else if (cities[1] === "karachi") {
//     console.log("city of light")

// } else if (cities[2] === "karachi") {
//     console.log("city of light")

// } else {
//     console.log("no light")
// }

var cities = ["lahore", "multan", "", "delhi", "dhaka", "mumbai"]

var isMatch = false

for (var i = 0; i < cities.length; i++) {
    // console.log(cities[i])
    if (cities[i] === "karachi") {
        alert("Welcome to Karachi")
        isMatch = true
        break
    }
}



console.log("isMatch", isMatch)
if (isMatch === false) {
    alert("Karachi not exist")
}






// var arr = ["apple", "orange", "apple", "banana"]
// var obj = {}
// arr.forEach((value) => {
//     obj[value] = (obj[value] + 1) || 1
// })

// console.log(obj)


