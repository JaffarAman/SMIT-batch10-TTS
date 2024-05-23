import express from "express"
import { createServer } from "http"
import { Server } from "socket.io";

const PORT = 8000
const app = express()
const httpServer = createServer(app)

const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
})


// io.on

// io.on =>>
// io.emit 

io.on("connection", (socket) => {
    socket.emit("welcome", "WELCOME SOCKET CONNECTED!")

    socket.on("user-message", (payload) => {
        console.log("payload", payload)
        socket.broadcast.emit("message", payload)
        // io.emit("message", payload)
    })




    // console.log("socket", socket.id)
    // socket.emit("welcome", "WELCOME TO THE SOCKET SERVER")

    // socket.on("send-message", (payload) => {
    //     // console.log("payload", payload)
    //     io.emit("send", payload)
    // })

})

httpServer.listen(PORT, () => console.log(`server running on localhost:${PORT}`))