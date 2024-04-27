import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    password: String,
    age: {
        type: Number,
        default: 0
    },
})

const UserModel = mongoose.model("user", userSchema)

export default UserModel
