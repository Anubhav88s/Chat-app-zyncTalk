import jwt from "jsonwebtoken";
import User from "../modules/user.model.js";

export const protectRouter = async (req , res , next) => {
    try{
    const token = req.cookies.jwt ; 

    if (!token){
        res.status(401).json({message: "Unauthorized - No token found"})
    }

    const decoded = jwt.verify (token , process.env.JWT_SECRET);
    
    if(!decoded){
        res.status(401).json({message: "Unauthorized - Invalid token"})
    }

    const user = await User.findById(decoded.userId).select("-password");

    if(!user){
        res.status(401).json({message: "Unauthorized - User not found"})
    }

    req.user = user;
    next();
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: "Internal Server Error"})
    }
}