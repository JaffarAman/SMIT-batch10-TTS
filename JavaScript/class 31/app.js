// console.log("HELLO CLASS")

// var parent = document.getElementById("parent")

// console.log(parent.nodeType)
// console.log(parent.nodeValue)



// var para = document.getElementById("para")
// console.log("para", para.innerHTML)
// console.log("para", para.nodeValue)
// // console.log(parent.firstChild.nodeType)
// var paras = document.getElementsByTagName("p")
// console.log(paras.length)


// var para = document.getElementById("para")

// function addPH() {
//     var input = document.getElementById("input")
//     // console.log(input.value)
//     // console.log(input.attributes)
//     // console.log(input.hasAttribute("id"))
//     // console.log(input.hasAttribute("placeholder"))
//     // // input.setAttribute(attrName , attrValue)
//     // input.setAttribute("placeholder", "Enter your name")

//     console.log(input.hasAttribute("id"))
//     console.log(input.getAttribute("type"))

//     // input.placeholder = ""
// }


// var parent = document.getElementById("parent")
// var h1ELement = document.createElement("h1")
// var h1ELementValue = document.createTextNode("Hello WORLD")
// h1ELement.setAttribute("class", "h1Heading")
// h1ELement.setAttribute("onclick", "clickfun()")

// // console.log(h1ELement)
// // console.log(h1ELementValue)
// h1ELement.appendChild(h1ELementValue)

// parent.appendChild(h1ELement)
// console.log(h1ELement)


// function clickfun() {
//     console.log("clickfun()")
// }




// var parent = document.getElementById("parent")
// var h1ELement1 = document.createElement("h1")
// var h1ELement2 = document.createElement("h1")
// var h1ELementValue1 = document.createTextNode("Hello WORLD 1")
// var h1ELementValue2 = document.createTextNode("Hello WORLD 2")


// h1ELement1.append(h1ELementValue1)

// h1ELement2.append(h1ELementValue2)
// // console.log(h1ELement1)
// // console.log(h1ELement2)

// parent.append(h1ELement1)




// parent.append(h1ELement2)


// var firstChild =
// console.log(parent)
// parent.insertBefore(h1ELement2 )


// h1ELement2.append(h1ELementValue2)

// var h1FirstChild = parent.firstChild
// // var h1FirstChild = parent.firstChild
// console.log(h1FirstChild)
// parent.insertBefore(h1ELement2, h1FirstChild)




var parent = document.getElementById("parent")
var para = document.createElement("p")
var paraText = document.createTextNode("PARA 1")

para.append(paraText)

var ele2 = parent.lastElementChild
parent.removeChild(ele2)
// parent.append(para)
// parent.insertBefore(para, ele2)
