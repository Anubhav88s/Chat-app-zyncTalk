import express from "express";
import { login, logout, signup , updateprofile , checkAuth } from "../controllers/auth.controller.js";
import { protectRouter } from "../middleware/auth.middleware.js";
import { loginLimiter } from "../middleware/rateLimiter.middleware.js";

const router = express.Router();

router.post("/signup" , signup );

router.post("/login", loginLimiter, login);

router.post("/logout" , logout );

router.put("/updateprofile" , protectRouter , updateprofile );

router.get("/check" , protectRouter , checkAuth );

export default router ;