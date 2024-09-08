//  fullname,password,confirm password,gender,mobile no.,username,profile pic
import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minLength:8,
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female"],
    },
    profilePic:{
        type:String,
        default:"",
    }
    // timestamps give created at and updated at;
},{timestamps:true});

const User=mongoose.model("User",userSchema);

export default User;