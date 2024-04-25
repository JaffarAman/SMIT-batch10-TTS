import express from "express"
const app = express()
const PORT = process.env.PORT || 5000

//body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const userDB = []


app.get("/", (req, res) => {
    res.json({
        message: "HELLO WORLD"
    })
})
app.get("/getuser", (request, response) => {
    response.json({
        message: "USER GET!",
        data: userDB
    })
})


app.post("/createuser", (request, response) => {
    console.log("request", request.body)
    userDB.push(request.body)
    response.json({
        message: "USER CREATED!"
    })
})


app.put("/updateuser/:id", (request, response) => {
    console.log("param", request.params)
    console.log("body", request.body)
    response.json({
        message: "USER UPDATED!"
    })
})

app.delete("/deleteuser/:id", (request, response) => {
    console.log("param", request.params)

    response.json({
        message: "USER Deleted!"
    })
})


// app.post("")

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}/`))