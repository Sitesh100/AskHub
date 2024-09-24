const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    userID: {
        type:mongoose.Schema.Types.ObjectId,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});