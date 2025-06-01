import mongoose from 'mongoose';
import { type } from 'os';
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please enter course title"],
        minLength: [5, "Title must contain at least 5 characters"],
        minLength: [5, "Title cannot contain more than 50 characters"]
    },
    lectures: {
        title: {
            type: String,
            // required: true,
        },
        description: {
            type: String,
            // required: true,
        },
        video: {
            public_id: {
                type: String,
                // required: true,
            },
            url: {
                type: String,
                // required: true,
            },
        },

    },
    poster: {
        public_id: {
            type: String,
            // required: true,
        },
        url: {
            type: String,
            // required: true,
        },
    },
    views: {
        type: Number,
        default: 0,
    },
    numOfVideos: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        // required: true,
    },
    createdBy: {
        type: String,
        required: [true,"Enter Course Creator Name"],
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

export const Course = mongoose.model("Course", courseSchema);