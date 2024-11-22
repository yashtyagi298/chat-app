
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routers/auth.route.js";
dotenv.config()

const app= express();
const PORT = process.env.PORT

app.use("/api/auth",authRoutes);
app.listen(PORT, () => {
    console.log(` http://localhost:${PORT}`);
    connectDB();
});


