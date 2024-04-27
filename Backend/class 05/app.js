import express from "express"
import mongoose from "mongoose"
import UserModel from "./models/userSchema.js"
const app = express()
const PORT = process.env.PORT || 5000

//body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const uri = "mongodb+srv://admin:admin@cluster0.toebppr.mongodb.net/"
mongoose.connect(uri)
    .then(res => {
        console.log("mongoDB CONNECTED!")
    })
    .catch(err => {
        console.log("mongoDB error", err.message)
    })



// CREATE USER

app.post("/createuser", async (request, response) => {
    try {
        console.log("request body", request.body)
        const userResponse = await UserModel.create(request.body)
        console.log(userResponse)
        response.json({
            data: userResponse,
            status: true,
            message: "User created!"
        })
    } catch (error) {
        response.json({
            data: [],
            status: false,
            message: error.message
        })
    }
})





app.get("/", (req, res) => {
    res.json({
        message: "HELLO WORLD"
    })
})
app.get("/getuser", async (request, response) => {
    try {
        const userData = await UserModel.find({})
        response.json({ data: userData })
    } catch (error) {

    }
})



// 
app.get("/getuser/:id", async (request, response) => {
    try {
        const { id } = request.params
        // const userData = await UserModel.findById(id)
        const userData = await UserModel.find({
            userName: "inno sufiyan"
        })
        response.json({ data: userData })
    } catch (error) {

    }
})




app.put("/updateuser/:id", async (request, response) => {
    console.log("param", request.params)
    console.log("body", request.body)

    const userid = request.params.id
    const updateUser = await UserModel.findByIdAndUpdate(userid, request.body)

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




app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}/`))