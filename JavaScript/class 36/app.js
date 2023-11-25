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