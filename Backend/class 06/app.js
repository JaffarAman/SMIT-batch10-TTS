import express from "express";
import mongoose from "mongoose";
import { PostModel } from "./models/PostSchema.js";
const app = express()
const PORT = process.env.PORT || 8080
import cors from "cors"

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: "*" }))

const uri = "mongodb+srv://admin:admin@cluster0.toebppr.mongodb.net/"

mongoose.connect(uri)
    .then(() => console.log("mongodb connected!"))
    .catch((error) => console.log("err mongodb", error.message))



// {
//     // value
//     // userID :"101"
// }

app.post("/createpost", async (req, res) => {
    try {
        console.log("req", req.body)
        const { value, userID } = req.body
        if (!value || !userID) {
            res.json({
                message: "Required field are missing!",
                status: false
            })
            return
        }
        const obj = {
            value,
            userID
        }
        const postResponse = await PostModel.create(obj)
        console.log(postResponse, "postResponse")
        res.json({
            message: "post Created!",
            data: postResponse,
            status: true
        })

    } catch (error) {
        res.json({
            message: error.message,
            data: [],
            status: false
        })
    }
})

app.get("/getpost", async (req, res) => {
    try {
        const postResponse = await PostModel.find({})
        res.json({
            message: "post Get!",
            data: postResponse,
            status: true
        })

    } catch (error) {
        res.json({
            message: error.message,
            data: [],
            status: false
        })
    }
})


app.put("/updatepost/:id", async (req, res) => {
    try {

        const postID = req.params.id
        const { value } = req.body

        const obj = {
            value,
        }
        const postResponse = await PostModel.findByIdAndUpdate(postID, obj, { new: true })
        console.log(postResponse, "postResponse")
        res.json({
            message: "post updated!",
            data: postResponse,
            status: true
        })

    } catch (error) {
        res.json({
            message: error.message,
            data: [],
            status: false
        })
    }
})

app.delete("/deletepost/:id", async (req, res) => {
    try {

        const postID = req.params.id
        const postResponse = await PostModel.findByIdAndDelete(postID)
        res.json({
            message: "post deleted!",
            status: true
        })

    } catch (error) {
        res.json({
            message: error.message,
            data: [],
            status: false
        })
    }
})



app.get("/", (req, res) => {
    res.json({
        message: "SERVER UP"
    })
})


app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}/`))