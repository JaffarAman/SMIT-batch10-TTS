import UserModel from "../models/UserSchema.js"
import bcrypt, { hash } from "bcrypt"
export const signupController = async (request, response) => {
    try {
        const { fullName, age, phoneNumber, gender, email, password } = request.body

        if (!fullName ||
            !age ||
            !phoneNumber ||
            !gender ||
            !email ||
            !password) {
            response.json({
                message: "required field are missing!",
                status: false
            })
            return
        }
        const hashPass = await bcrypt.hash(password, 10)

        const user = await UserModel.findOne({ email })
        console.log(user, "user")
        if (user) {
            response.json({
                message: "email address already in use!",
                status: false
            })
            return
        }

        const obj = {
            ...request.body,
            password: hashPass
        }
        const userResponse = await UserModel.create(obj)
        console.log("response", userResponse)
        response.json({
            data: userResponse,
            message: "successfully signup!",
            status: true
        })
    } catch (error) {
        response.json({
            message: error.message,
            status: false,
            data: [],
        })
    }
}