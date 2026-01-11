import jwt from "jsonwebtoken";

export const generateToken = (userId , res) => {
    const token = jwt.sign({userId} , process.env.JWT_SECRET , {expiresIn: "7d"})

res.cookie("jwt", token, {

  maxAge: 7 * 24 * 60 * 60 * 1000,                  // Cookie expiry time → 7 days (in milliseconds)
  httpOnly: true,                                   // Prevents JavaScript access to the cookie (protects from XSS attacks)
  sameSite: "strict",                               // Cookie will be sent only for same-site requests (protects from CSRF)
  secure: process.env.NODE_ENV === "production"     // Cookie will be sent only over HTTPS in production
});

return token ;
};