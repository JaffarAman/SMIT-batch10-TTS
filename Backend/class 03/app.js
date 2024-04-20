import express from "express"
import { product } from "./product.js"
const app = express()
const PORT = process.env.PORT || 5000


// app.use((request, response, next) => {
//     console.log("hit every request")
//     const isAuth = true
//     if (!isAuth) {
//         response.send("UNAUTH USER")
//     } else {
//         next()
//     }

// })

const authMiddleware = (request, response, next) => {
    console.log("hit every request")
    const isAuth = false
    if (!isAuth) {
        response.json({
            data: null,
            message: "UnAUTH USER"
        })
    } else {
        next()
    }
}

app.get("/", (request, response) => {
    response.send("<h1>HELLO WORLD</h1>")
})

app.get("/products", authMiddleware, (request, response) => {
    console.log("request.query", request.query)
    const query = request.query
    if (query?.limit) {
        response.send(product.slice(0, query?.limit))
    } else {
        response.send(product)
    }

})

// app.get("/products/:id", (request, response) => {
//     const singleProduct = product.find((product) => product.id === +request.params.id)
//     console.log("singleProduct", singleProduct)
//     response.send(singleProduct)
// })



app.listen(PORT, () => console.log(`server running on  http://localhost:${PORT}`))


