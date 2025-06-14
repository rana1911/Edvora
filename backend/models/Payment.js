import mongoose from "mongoose";
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    razorpay_signature: {
        type: String,
        required: true
    },
    razorpay_payment_id: {
        type: String,
        required: true
    },
    razorpay_subscription_id: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Payment = mongoose.model("Payment", paymentSchema);