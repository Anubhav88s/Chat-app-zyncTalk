import express from "express" ; 
import { getUserForSidebar , getMessages , sendMessages } from "../controllers/message.controller.js";
import { protectRouter } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/users" , protectRouter , getUserForSidebar)
router.get("/:id" , protectRouter , getMessages)
router.post("/send/:id" , protectRouter , sendMessages)

export default router;