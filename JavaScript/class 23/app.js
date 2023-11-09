
// function foo() {

//     console.log("hello world")


// }

// fetch("https://api.github.com/users/Rizwanjamal")
//     .then((data) => data.json())
//     .then((result) => console.log(result))
//     .catch((err) => {
//         console.error('err :', err)
//     })

let customPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolved !')
        }, 2000)
    })
}

// customPromise()
//     .then((data) => console.log(data))

let getUserData = async () => {
    const data = await customPromise()
    console.log(data)
}


// const response = await fetch("https://api.github.com/users/Rizwanjamal")
// console.log(response)
