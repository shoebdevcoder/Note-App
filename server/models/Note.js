import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String
    },
    tags: [String],
    createAt: {
        type: Date,
        default: Date.now
    }
})

const Note = mongoose.model('Notes', noteSchema);
export default Note;