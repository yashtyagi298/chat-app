
import express from "express";
import dotenv from "dotenv";
import cookieparser from "cookie-parser"
import { connectDB } from "./lib/db.js";
import authRoutes from "./routers/auth.route.js";
import messageRoute from "./routers/message.route.js"
dotenv.config()

const app= express();
app.use(express.json());
app.use(cookieparser());
const PORT = process.env.PORT

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoute);
app.listen(PORT, () => {
    console.log(` http://localhost:${PORT}`);
    connectDB();
});


