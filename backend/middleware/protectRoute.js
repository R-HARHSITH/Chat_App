import jwt from "jsonwebtoken";
import User from "../models/usermodel.js";

const protectRoute=async(req,res,next)=>{
    try {
        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unauthorised:Token is not present"});
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
        if(!decoded){
            return res.status(401).json({error:"Unauthorised:Token is not present"});   
        }
        const user=await User.findById(decoded.userID).select("-password");
        if(!user){
            return res.status(404).json({error:"User not found"});
        }
        req.user=user;
        next();
    } catch (error) {
        console.log("Error in message route",error.message);
        res.status(500).json({error:"Internal Server error"});
    }
}

export default protectRoute;