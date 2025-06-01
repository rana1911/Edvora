import app from './app.js';
import mongoose from 'mongoose';
import cloudinary from 'cloudinary';
import Razorpay from 'razorpay';
import dotenv from "dotenv";
dotenv.config();

// app.use(bodyParser.json());

const db = 'mongodb://localhost:27017/edvora';
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err));

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET
});

console.log(process.env.RAZORPAY_API_KEY);
console.log(process.env.RAZORPAY_API_SECRET);


export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET
})

const port = 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
