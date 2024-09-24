const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    // answerID: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true  // Answer must belong to a user
    // },
    questionID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true  // Answer must belong to a question
    },
    text:{
        type: String,
        required: true  // Answer must have text content
    },
    createdAt: {
        type: Date,
        default: Date.now  // Automatically set the creation date
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true  // Answer must belong to a user
    }
});