import express from "express";
import helmet from "helmet";

import authRouter from "./routes/auth.route.js";
import messageRouter from "./routes/message.route.js";
import dotenv from "dotenv";

import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import { server, app } from "./lib/socket.js";
import path from "path";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "img-src": ["'self'", "data:", "https://res.cloudinary.com", "https://randomuser.me"],
      },
    },
    crossOriginEmbedderPolicy: false,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(cors(
  {
    credentials: true,
    origin: process.env.FRONTEND_URL
  }
));

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);


//for production only (to host it )
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get(/(.*)/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
})