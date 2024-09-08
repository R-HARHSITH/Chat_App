import Conversation from "../models/conversationmodel.js";
import Message from "../models/messagemodel.js";
export const sendMessage=async(req,res)=>{
    try {
        const {message}=req.body;
        const {id:recieverId}=req.params;
        const senderId=req.user._id;
        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,recieverId]},
        });
        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,recieverId],
            });
        }
        const newMessage=new Message({
            senderId, //senderId, implies senderId:senderId;
            recieverId,
            message,  
        });
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        // await conversation.save();
        // await newMessage.save()
        await Promise.all([conversation.save(),newMessage.save()]);
        res.status(200).json({newMessage});
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
            res.status(200).json([]);
        }
        const messages=conversation.messages;
        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in sending message",error.message);
        res.status(500).json({error:"Intarnal server error"});
    }
}