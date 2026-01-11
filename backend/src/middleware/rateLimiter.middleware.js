import { rateLimit } from "express-rate-limit";

export const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 10, // More restrictive for login (e.g., 10 attempts)
    standardHeaders: "draft-7",
    legacyHeaders: false,
    message: "Too many login attempts, please try again after 15 minutes",
});
