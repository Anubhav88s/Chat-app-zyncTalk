import User from "../modules/user.model.js";
import Message from "../modules/message.model.js";
import cloudinary from "../lib/claudinary.js";

import { getReceiverSocketId, io } from "../lib/socket.js";

export const getUserForSidebar = async (req , res) => {
    try {
        const logggedInUser = req.user._id;
        const filteredUsers = await User.find({
            _id:{$ne:logggedInUser}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUserForSidebar controller: ",error);
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const getMessages = async (req , res) => {
    try {
        const {id:userToChatId} = req.params;
        const myId = req.user._id;

        const messages = await Message.find({
            $or:[
                {senderId : myId , receiverId : userToChatId},
                {senderId : userToChatId , receiverId : myId}
            ],
        })

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages controller: ",error);
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const sendMessages = async (req , res) => {

    try {
        const {text , image} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;

        let imageUrl ;
        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl
        })

        await newMessage.save();

        // realtime functionality goes here => socket.io

        const receiverSocketId = getReceiverSocketId(receiverId);

        if (receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(200).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessages controller: ",error);
        res.status(500).json({message: "Internal Server Error"})
    }
}