import express from "express";
import {config} from "dotenv";

config({
    path:"./config/config.env",
});
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));



import course from "./backend/routes/courseRoutes.js";
import user from "./backend/routes/userRoutes.js"
import ErrorMiddleware from "./backend/middlewares/Error.js";

app.use("/api/v1",course);
app.use("/api/v1",user);
export default app;

app.use(ErrorMiddleware);