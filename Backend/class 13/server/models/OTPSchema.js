import mongoose from "mongoose";

const OTPSchema = new mongoose.Schema({
    otp: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    isUsed: {
        type: Boolean,
        default: false
    },

    createAt: {
        type: Date,
        default: Date.now()
    }
})

const OTPModel = mongoose.model("otp", OTPSchema)
export default OTPModel