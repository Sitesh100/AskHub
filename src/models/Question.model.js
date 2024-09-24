const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
    // questionID:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required:true
    // },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    topicTags:{
        type:[String]
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})

module.exports = mongoose.model('Question',questionSchema);