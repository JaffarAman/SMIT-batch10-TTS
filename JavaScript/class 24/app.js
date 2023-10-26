function getValue() {
    var input = document.getElementById("userName")
    console.log("HELLO WORLD", input)
    input.placeholder = "Enter your name"
    console.log("input value", input.value)
}

function setValue() {
    var input = document.getElementById("userName")
    input.value = "HELLO WORLD"
    console.log("input value", input.value)

}


// function getPara() {
//     var para = document.getElementById("para")
//     console.log("para", para.innerHTML)


// }

// function setPara() {
//     var para = document.getElementById("para")
//     // console.log("para", para.innerHTML)
//     para.innerHTML = "JAFFAR AMAN"
// }


function seeMore() {
    var para = document.getElementById("para")
    var btn = document.getElementById("btn")
    if (btn.innerHTML === "SEE MORE") {
        para.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, non nam delectus facilis assumenda dolor modi quo itaque! Ullam voluptates suscipit blanditiis tenetur voluptate asperiores, magnam fugit labore doloribus quis, obcaecati esse ea nemo harum sequi modi quod error reprehenderit qui unde porro repellendus, incidunt maiores quae. Esse, eligendi ab!"
        btn.innerHTML = "LESS MORE"
    } else {
        para.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, ad."
        btn.innerHTML = "SEE MORE"
    }
}


function mouseEnter(elem) {
    console.log("mouseEnter", elem.src)
    elem.src = "./images/car2.webp"


}

function mouseOut(elem) {
    console.log("mouseOut")
    elem.src = "./images/car1.jpg"
}