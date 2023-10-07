

// javascript
// JS

// var newStr = "a smarter way to learn javascript"
// for (var i = 0; i < newStr.length; i++) {
//     if (newStr.slice(i, i + 10) == "javascript") {
//         console.log(i)
//     }
// }

// console.log(newStr.slice(23, 23 + 10))




// var str = "The We New Yorker magazine doesn't allow the phrase World War II. They say it should be the World War II. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers"


// // .slice(i , 13)

// for (var i = 0; i < str.length; i++) {
//     if (str.slice(i, i + 12) == "World War II") {
//         // console.log(i)
//         const beforeLen = str.slice(0, i)
//         const concatWord = "Second World War"
//         const afterLen = str.slice(i + 12)
//         // console.log(beforeLen)
//         // console.log(afterLen)
//         str = beforeLen + concatWord + afterLen
//         console.log("finalSummary", str)

//     }
// }




// var str = "The We New Yorker magazine doesn't allow the phrase World War II. They say it should be the World War II. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers"

// var indexNumber = str.lastIndexOf("World War II")
// var changeSen = str.slice(0, indexNumber) + "Second World War" + str.slice(indexNumber + 12)

// console.log("changeSen", changeSen)



// var userName = "lahore islamabad karachi"
// const indexNum = userName.indexOf("karachi")
// console.log("indexNum", indexNum)
// // console.log("userName r", userName[indexNum])


// if (indexNum == -1) {
//     alert("Karachi not exist")
// } else {
//     alert("Karachi  exist")
// }



// var arr = ["apple", "mango"]
// var indexNumber = arr.indexOf("apple")
// console.log("indexNumber", indexNumber)







// var userName = "Jaffar Aman"

// console.log(userName.charAt(5))
// console.log(userName[userName.length - 1])




// var str = "The We New Yorker magazine doesn't allow the phrase World War II. They say it should be the World War II. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers"

// str = str.replace(/World War II/g, "the Second World War")
// console.log(str)



var number1 = 98// decimal
// var number1 = 100   //integar


// var roundNum = Math.round(number1)
// var floorNumber = Math.floor(number1)
var ceilNumber = Math.ceil(number1)


console.log("number1", number1)
// console.log("floorNumber", floorNumber)
console.log("ceilNumber", ceilNumber)