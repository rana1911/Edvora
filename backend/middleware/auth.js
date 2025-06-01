import catchAsyncError from "./catchAsyncError";
import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/ErrorHandler";
import { User } from "../models/User";

const isAuthenticated = catchAsyncError(async (err, req, res, next) => {
    const { token } = req.cookie;
    if(!token) return next(new ErrorHandler("Not logged in", 401));
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded._id);
    next();
});