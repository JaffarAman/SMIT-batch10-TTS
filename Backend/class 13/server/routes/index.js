import express from "express"
import { PostModel } from "../models/PostSchema.js";
import { createPost, deletePost, getPost, updatePost } from "../controller/postController.js";
import { LoginController, OTPVerification, signupController } from "../controller/authController.js";
import upload from "../middlewares/multer.js";
import { cloudinaryUploader } from "../config/cloudinaryConfig.js";
import { imageUpload } from "../controller/imageUploader.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { isUserMiddleware } from "../middlewares/isUser.js";
const route = express.Router()



// AUTH API
route.post("/api/signup", signupController)
route.post("/api/login", LoginController)
route.post("/api/otpverification", OTPVerification)


// POST API
route.post("/api/createpost", authMiddleware, createPost)
route.get("/api/getpost", [authMiddleware, isUserMiddleware], getPost)
route.put("/api/updatepost/:id", authMiddleware, updatePost)
route.delete("/api/deletepost/:id", authMiddleware, deletePost)

//Images API
route.post("/api/imageupload", [authMiddleware, upload.single("abc")], imageUpload)


route.get("/", (request, response) => {
    response.send("HELLO SERVER MVC")
})

export default route