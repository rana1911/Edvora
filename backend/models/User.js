import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type:String,
        required: [true, "Please enter your name"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minLength: [8, "Password must contain at least 8 characters"],
        select: false
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    subscription: {
        id: String,
        status: String
    },
    avatar: {
        public_id: {
            type: String,
        },
        url: {
            type: String
        },
    },
    playlist: [
        {
            course: {
                type: Schema.Types.ObjectId,
                ref: "Course",
            },
            poster: {
                type: String
            }
        }
    ],
    
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.getJWTToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });
};

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.getResetToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).toString("hex");
    this.resetPasswordExpire = Date.now() + 15 * 60 * 100;
    return resetToken;
}

export const User = mongoose.model("User", userSchema);