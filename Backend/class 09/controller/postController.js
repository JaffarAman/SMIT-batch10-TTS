import { PostModel } from "../models/PostSchema.js"

export const createPost = async (req, res) => {
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
}

export const getPost = async (req, res) => {
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
}

export const updatePost = async (req, res) => {
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
}

export const deletePost = async (req, res) => {
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
}