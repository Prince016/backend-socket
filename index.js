import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const PORT = 3000;
const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello world");
});

io.on("connection", (socket) => {
  console.log("user connected ");
  console.log("socket id -> ", socket.id);
  // socket.emit("welcome", `Welcome to the server , ${socket.id}`);
  // socket.broadcast.emit("welcome", ` ${socket.id} join the server`);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
