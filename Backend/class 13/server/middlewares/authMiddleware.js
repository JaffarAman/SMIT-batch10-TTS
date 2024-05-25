import jwt from "jsonwebtoken"

export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    console.log("token", token)
    const isVerify = jwt.verify(token, process.env.JWY_PRIVATEKEY)
    console.log("isVerify", isVerify)
    if (isVerify) {
        next()
    } else {
        res.status(401).json({
            message: "UNAUTH"
        })
    }


}