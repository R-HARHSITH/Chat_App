import User from "../models/usermodel.js";
import generateTokenandSetCookie from "../utils/jsonwebtoken.js";
import bcrypt from "bcryptjs";

export const signup=async(req,res)=>{
    try{
    const{fullName,userName,password,confirmPassword,gender}=req.body;
    if(password!=confirmPassword){
        return res.status(400).json({error:"Password doesnt match"});
    }
    const user=await User.findOne({userName});
    if(user){
       return  res.status(400).json({error:"Username already exist"});
    }
    // Hashing of password
    const salt=await bcrypt.genSalt(15);
    const hashPass=await bcrypt.hash(password,salt);
    // avatar
    const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${fullName}`;
    const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${fullName}`;
    const newUser=new User({
        fullName,
        userName,
        password:hashPass,
        gender,
        profilePic:gender==="Male"?boyProfilePic:girlProfilePic,
    });
    if(newUser){
        // generation of jwt
        generateTokenandSetCookie(newUser._id,res);
        await newUser.save();

        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            userName:newUser.userName,
            profilePic:newUser.profilePic,
        });
        // toast.success("Successfully sign up completed");
    }
    else{
        res.status(400).json({error:"invalid user data"});
        // toast.error("Error in entered data");
    }
}
catch(error){
    console.log("Error in signup",error.message);
    res.status(500).json({error:"Internal server error"});
}
}

export const login=async(req,res)=>{
    try {
        const {userName,password}=req.body;
        const user=await User.findOne({userName});
        if (!user) {
            return res.status(400).json({ error: "User not found" });
          }
        // console.log(user);
        const isPasswordCorrect=await bcrypt.compare(password,user?.password || "");
        // console.log(password);
        if(!user || !isPasswordCorrect){
           return res.status(400).json({error:"Invalid credentials"});
        }
        generateTokenandSetCookie(user._id,res);
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            userName:user.userName,
            profilePic:user.profilePic,
        });
    } catch (error) {
    console.log("Error in login",error.message);
    res.status(500).json({error:"Internal server error"});
    }
}

export const logout=(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0,
            httpOnly:true,
            sameSite:"strict",
        });
       res.status(200).json({message:"Logged out successfully"});
        
    } catch (error) {
            console.log("Error in logout",error.message);
            res.status(500).json({error:"Internal server error"});
            
    }
}