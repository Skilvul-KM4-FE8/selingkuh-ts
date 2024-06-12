import { NextApiRequest, NextApiResponse } from "next";
import { Server as HttpServer } from 'http';
import { Server as IOServer, Socket } from 'socket.io';
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";
import { PrismaClient } from "@prisma/client";


interface SocketServer extends HttpServer {
    io?: IOServer;
}

const libsql = createClient({
    url: `${process.env.TURSO_DATABASE_URL}`,
    authToken: `${process.env.TURSO_AUTH_TOKEN}`,
})

const adapter = new PrismaLibSQL(libsql)
const prisma = new PrismaClient({adapter})

export default async function message(req: NextApiRequest, res: NextApiResponse) {
    // console.log("================gt]-/==================")
    // console.log(res.socket.server.io)
    // console.log("================gt]-/==================")
    if (req.socket && !(req as any).socket.server.io) {
        console.log("Socket is initializing")
        const httpServer: SocketServer = (req as any).socket.server as SocketServer
        const io = new IOServer(httpServer, {
            path: "/api/socketio"
        })
        httpServer.io = io

        // console.log("================gt]-/==================")
        // console.log((req as any).socket.server.io)
        // console.log("================gt]-/==================")

        io.on("connection", (socket: Socket) => {
            console.log("A user connected")
            console.log("User Konek ke backend")
            
            socket.on("message", async (message:string) => {
                console.log("Chat masuk: ", message)
                try {
                    const newMessage = await prisma.message.create({
                        data: {
                            content: message,
                            userId: 1,
                            roomId: 1
                        }
                    })
                    // console.log(newMessage)
                    io.emit("message", newMessage)
                } catch (error) {
                    console.error(error)
                }

                // io.emit("message", message)
            })

            socket.on("disconnect", () => {
                console.log("A user disconnected")
            })
        })
    }
    res.end()
}