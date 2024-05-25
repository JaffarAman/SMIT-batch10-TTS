import jwt from "jsonwebtoken"
import UserModel from "../models/UserSchema.js"

export const isUserMiddleware = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    const isVerify = jwt.verify(token, process.env.JWY_PRIVATEKEY)

    const user = await UserModel.findById(isVerify._id)
    console.log("user", user)




    if (user.userType == "user") {
        next()
    } else {
        res.status(401).json({
            message: "UNAUTH"
        })
    }


}