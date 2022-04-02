import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export default mongoose.model('Post', PostSchema);