import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authroutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userroutes.js";
import {app, server} from './socket/socket.js'


const PORT=process.env.PORT||5000;

dotenv.config();

app.use(express.json()); //converts data in body or data entered into post request and be accessible as req.body
app.use(cookieParser());

app.use("/api/auth",authRoutes); 
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


// app.get("/",(req,res)=>{
//     res.send("Hello WOrlD");
// });

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});