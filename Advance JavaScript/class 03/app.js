// map , filter , find , findIndex ,forEach

// var arr = [10, 20, 30, 40, 20]

// find

// var findValue = arr.findIndex((value, index, array) => {
//     if (value === 20) {
//         return true
//     }
// })

// console.log(findValue)




// {
//     name: "Jaffar",
//         age : 22,
//             gender : "male"
// }


// var arr = [10, 20, 30, 40, 20]

var stdArr = [
    {
        name: "Jaffar",
        age: 22,
        gender: "male"
    },
    {
        name: "Sufiyan",
        age: 32,
        gender: "male"
    },
    {
        name: "Saba balance wali",
        age: 14,
        gender: "female"
    }
]

// var maleCollection = stdArr.filter((value, index) => {
//     console.log(value.gender)
//     if (value.gender !== "male") {
//         return "jaffar"
//     }
// })

// console.log("maleCollection", maleCollection)



// // const filterValues = arr.filter((value, index) => {
// //     if (value == 20) {
// //         return true
// //     }
// // })

// // console.log(filterValues)



// var arr = [10, 20, 30, 40, 50,]
// var newArr = arr.map((value) => {
//     if (value === 30) {
//         return true
//     }
// })

// console.log(arr, "Arr")
// console.log(newArr, "newArr")

// var arr = [10, 20, 30, 40, 50,]
// var newArr = arr.forEach((value) => {
//     if (value === 30) {
//         return true
//     }
// })

// console.log(arr, "Arr")
// console.log(newArr, "newArr")



// const foo = (a = 0) => {
//     console.log(a + 10)
// }
// foo()


// const userDetails = (fname, lname, age, ...rest) => {
//     // console.log(fname, "fname")
//     // console.log(rest[1], "rest")
//     console.log("age", age)
// }

// const userDetails = (...rest) => {
//     // console.log(rest)
//     // const [fname] = rest
// }

// userDetails("jaffar", "aman", 22, "male", "SMIT", "batch 10")



// Promises

// const myPromise = new Promise((resolve, reject) => {
//     const isCivic = true
//     if (isCivic) {
//         resolve("aba man gaye")
//     } else {
//         reject("phupho aayi thi rat main!")
//     }

// })
//     .then((resolve) => {
//         console.log(resolve, "resolve")
//     })
//     .catch((reject) => {
//         console.log(reject, "reject")
//     })




// const zingerPromise = new Promise((resolve, reject) => {
//     const zinger = false
//     if (zinger) {
//         resolve({ name: "jaffar" })
//     } else {
//         reject(false)
//     }
// })
//     .then((success) => console.log(success, "success"))
//     .catch((error) => console.log(error))



// fetch
// https://fakestoreapi.com/products

fetch("https://fakestoreapi.com/products134654654651521")
    .then((res) => res.json()) ///convert api response into JSON
    .then(resolve => console.log("resolve", resolve))
    .catch(error => console.log("error", error))



