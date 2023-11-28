// console.log("OBJECTS")

// collection students

// name , age , gender ,

// var stdArr = ["Jaffar" , 22 , "male"]

// var stdObj = {
//     name: "Jaffar",
//     age: 22,
//     gender: "Male"

// }

// console.log(stdObj.name) // dot notation
// console.log(stdObj["name"]) // array notation
// console.log(stdObj["age"]) // array notation
// console.log(stdObj["gender"]) // array notation

// for (var key in stdObj) {

//     // console.log(key, "key")
//     console.log(key , stdObj[key])
// }

// var stdObj = {
//     name: "Jaffar",
//     age: 22,
//     gender: "Male"

// }

// stdObj.id = 101
// stdObj.name = "Jaffar Aman"

// delete stdObj.gender

// console.log(stdObj)



// var obj = {
//     name: "jaffar"

// }

// var isCheck = "name" in obj
// console.log(isCheck)


var obj = {
    firstName: "Jaffar",
    lastName: "Aman",
    getFullName: function () {
        // console.log(this.firstName + this.lastName)
        // console.log("HELLO WORLD")
        return this.firstName + " " + this.lastName

    }
}

var fullName = obj.getFullName()
console.log(fullName)



var str = "Jaffar"
str.slice()

// var arrr = [function foo(a) {
//     console.log("Values" , a)
// }, 0]

// console.log(arrr[0](10)  )


// var stdObj = {
//     firstName: "Jaffar",
//     lastName: "Aman",
//     getFullName: function () {
//         // console.log(this.firstName + this.lastName)
//         return this.firstName + " " + this.lastName
//     }


// }

// var FullName = stdObj.getFullName()
// console.log(FullName , "FullName")

// console.log("FullName", stdObj.firstName + " " + stdObj.lastName)



// var std = {
//     fullName: "Muhammad Ali",
//     marks: {
//         html: 85,
//         css: 75,
//         js: 70
//     },

//     totalMarks: function () {
//         return (this.marks.html + this.marks.css + this.marks.js)
//     },
//     percentage: function () {
//         return ((this.totalMarks() / 300) * 100).toFixed(2)
//     }
// }


// var totalm = std.totalMarks()
// var percentage = std.percentage()

// console.log(percentage, "percentage")


// name
// age
// gender
// id
// var std1 =   {
//     // name
// // age
// // gender
// // id
// }
// var std2 =   {
//     // name
// // age
// // gender
// // id
// }


//  var std100 =   {
//     // name
// // age
// // gender
// // id
// }


// Constructors


function Std(name, age, gender, id, cnic) {
    this.stdName = name
    this.stdage = age
    this.gender = gender
    this.id = id
    this.cnic = cnic
    this.totalMarks = function (name) {
        return name
    }
}
Std.prototype.foo = function () {
    console.log("prototype")
}

var std1 = new Std("Jaffar", 22, "male", 101, "545645646")
var std2 = new Std("Aman", 22, "male", 102)
console.log(std1.totalMarks("JAFFAR"))
console.log(std2)