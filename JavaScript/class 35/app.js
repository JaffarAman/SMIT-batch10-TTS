console.log("HELLO WORLD...")

// var arr = ["apple" , "mango"]

// var arr = ["ali" , 22]


// var obj = {
//     name : "Jaffar",
//     age : 22
// }

// var arr = ["jaffar", 101]
// console.log(arr[0])

// // property
// // name : value
// var obj = {
//     name: "Jaffar Aman",
//     age: 22
// }


// console.log(obj.name , obj.age)  //dot notaion
// console.log(obj)




// var arr = [10, 20, 30]
// console.log(arr[0])



// var obj = {
//     name: "Jaffar Aman",
//     age: 22
// }

// console.log(obj["name"]) //array notation



// var array = ["Ali", 22 , [75,85,40] , "male" , 101]

// var stdObj = {
//     id: 101,
//     name: "Ali",
//     age: 22,
//     gender: "male",
//     marks: {
//         html: 65,
//         css: 75,
//         javascript: 15
//     },
//     subjects: ["html", "css", "js"]
// }

// console.log(stdObj.name)
// console.log(stdObj.marks.javascript)
// console.log(stdObj.subjects[1])



// var name = "Jaffar"
// name.length


var obj = {
    id: 101,
    name: ["Ali", "Jaffar"],
    age: 22,
    gender: "male",
}

// console.log(obj.id)
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.gender)


// for in loop
for (var key in obj) {
    // console.log(key)
    if (key === "name") {
        console.log(key, obj[key])
        for (let index = 0; index < obj[key].length; index++) {
            const element = obj[key][index];

        }
    }
}
