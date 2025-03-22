import express from "express";
import {adminRouter} from "./routes/adminRoutes";
import { studentRouter } from "./routes/studentRoutes";
import { authRouter } from "./routes/authRoutes";

const app= express();
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/student",studentRouter);
app.use("/auth",authRouter);

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})