// alert("HELLO  WORLD")

// var now = new Date();

// // console.log(now.slice(0 , 3))
// // console.log(typeof now)
// // console.log(now.toString().slice(0, 3))
// console.log(now.toDateString())  //get date string type
// console.log(now.toTimeString()) //get time string type
// console.log(now.toString()) // convert object into string



// var now = new Date()
// console.log("date", now.getDate())
// console.log("month", now.getMonth() + 1)
// console.log("month", now.getFullYear())

// var date = now.getDate()
// var month = now.getMonth() + 1
// var fullYear = now.getFullYear()
// var formatDate = date + "/" + month + "/" + fullYear

// console.log(formatDate)

// console.log("now", now.getDate())

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// console.log(dayNames[6])

// var day = new Date().getDay()
// var month = new Date().getMonth()
// console.log("day", dayNames[day])
// console.log("month", month)
// var hours = new Date().getHours()
// var min = new Date().getMinutes() 
// var sec = new Date().getSeconds()
// console.log("hours", hours)

// var miliSec = new Date().getMilliseconds()
// console.log("miliSec", miliSec)

// var time = new Date().getTime()
// console.log("time", time)


var userDOBPrompt = prompt("Enter DOB, format: 01 jan 1970")

var now = new Date()
var userDOB = new Date(userDOBPrompt) //user 

var userMiliSec = userDOB.getTime()
var nowMiliSec = now.getTime()


var diff = nowMiliSec - userMiliSec
var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))

console.log(age, "age")

console.log("diff", diff)

console.log("userMiliSec", userMiliSec)
console.log("nowMiliSec", nowMiliSec)












