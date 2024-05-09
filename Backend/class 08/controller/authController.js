import UserModel from "../models/UserSchema.js"
import bcrypt, { hash } from "bcrypt"
import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"

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
                message: "required fields are missing!",
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

export const LoginController = async (request, response) => {
    try {
        const { email, password } = request.body

        if (!email || !password) {
            response.json({
                message: "required fields are missing!",
                status: false
            })
            return
        }


        const user = await UserModel.findOne({ email })
        console.log("user", user)
        if (!user) {
            response.json({
                message: "Email or Password not valid!",
                status: false,
                data: [],
            })
            return
        }

        const comparePass = await bcrypt.compare(password, user.password)
        console.log("comparePass", comparePass)

        if (!comparePass) {
            response.json({
                message: "Email or Password not valid!",
                status: false,
                data: [],
            })
            return
        }

        const token = jwt.sign({ _id: user._id, email: user.email }, "PRIVATEKEY")
        response.json({
            message: "user login successfully!",
            status: true,
            data: user,
            token
        })

    } catch (error) {
        response.json({
            message: error.message,
            status: false,
            data: [],
        })
    }
}



const SendOTP = async (email) => {
    try {
        // const { email, password } = request.body
        console.log("email", email)
        const transporter = nodemailer.createTransport(
            {
                service: 'gmail',
                auth: {
                    user: 'firebase.database.auth@gmail.com',
                    pass: '****'
                }
            }
        );

        const response = transporter.sendMail({
            from: "",
            to: email,
            subject: "Email Verfication",
            html: `<h1> OTP CODE : 50505050 </h1>`,
        })

    } catch (error) {
        response.json({
            message: error.message,
            status: false,
            data: [],
        })
    }
}