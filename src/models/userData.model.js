const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
    // userID:{
    //     type:mongoose.Schema.ObjectId,
    //     required:true
    // },
    UserName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Bio:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('UserData',userDataSchema);