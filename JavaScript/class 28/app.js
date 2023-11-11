// var date1 = new Date("2023 1 7 03:00:00")
// var date2 = new Date("2023 1 7 04:00:00")
// console.log(date1)
// console.log(date2)

// console.log(date1 < date2)


var paras = document.getElementsByTagName("p")
console.log(paras[0])
console.log(paras[1])
console.log(paras[2])
console.log(paras[3])
var para = document.getElementsByTagName("p")

// console.log(para[2].innerHTML)
// console.log(para[2].style.background = "red")
// console.log(para[0])
// console.log(para[1])
// console.log(para[2])

// for (var i = 0; i < para.length; i++) {
//     // console.log(para[i])
//     // check odd number
//     if ((i + 1) % 2 == 0) {
//         para[i].style.background = "red"
//         para[i].style.color = "white"
//     } else {
//         para[i].style.background = "blue"
//         para[i].style.color = "white"
//     }

// }


// var parent = document.getElementById("parent")
// var para = parent.getElementsByTagName("p")
// var heading = parent.getElementById("heading")

// console.log(parent)
// console.log(para)


// console.log(document.childNodes[0])
// console.log(document.childNodes[1])

// console.log(document.childNodes[1].childNodes[2].childNodes[1])

// var h1 = document.childNodes[1].childNodes[2].childNodes[1]
// h1.style.background = "red"
// console.log(h1)



var pappa = document.childNodes[1].childNodes[2].childNodes[1]
// console.log(a.childNodes[1].childNodes[2].childNodes)

// console.log(pappa.firstChild)
// console.log(pappa.lastChild)

// console.log(pappa.firstChild.nextSibling)

var lstChild = pappa.lastChild
console.log(lstChild.nextSibling, "lstChild")
