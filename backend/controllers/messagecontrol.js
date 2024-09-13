import Conversation from "../models/conversationmodel.js";
import Message from "../models/messagemodel.js";
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js";
export const sendMessage=async(req,res)=>{
    try {
        const {message}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._id;
        let conversation=await Conversation.findOne({
            participants:{$all:[senderId,receiverId]},
        });
        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,receiverId],
            });
        }
        const newMessage=new Message({
            senderId, //senderId, implies senderId:senderId;
            receiverId,
            message,  
        });
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        // await conversation.save();
        // await newMessage.save()
        await Promise.all([conversation.save(),newMessage.save()]);
        const receiverSocketId=getReceiverSocketId(receiverId);
        console.log(receiverSocketId);
        if(receiverSocketId){
            // console.log("Hi",receiverSocketId);
            io.to(receiverSocketId).emit("newMessage",newMessage);
            // console.log("Bye",receiverSocketId);
        }
        res.status(200).json(newMessage);
    } catch (error) {
        console.log("Error in sending message",error.message);
        res.status(500).json({error:"Intarnal server error"});
    }
}

export const getMessage=async(req,res)=>{
    try {
        const {id:ToID}=req.params;
        const senderId=req.user._id;
        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,ToID]}
        }).populate("messages");
       
        if(!conversation){
            return res.status(200).json([]);
        }
        const messages=conversation.messages;
        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in sending message",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}