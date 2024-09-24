const NotImplemented = require("../error/notImplement");
const { StatusCodes } = require('http-status-codes');
// const BadRequest = require("../error/badRequest");
// const NotFound = require("../error/notFound");

function addUser(req,res,next){
    // Database operations to add a new user
    // res.json({message: "User added successfully"});
    try {
        throw new NotImplemented('get user');
    } catch (error) {
        next(error);
    }
};

function getUser(req,res,next){
    // Database operations to get a user by id
    res.json({message: "User data retrieved successfully"});
    // try {
    //     throw new BadRequest('getUser','id');
    // } catch (error) {
    //     next(error);
    // }
   
    
};

function updateUser(req,res,next){
    // Database operations to update a user by id
    res.json({message: "User data updated successfully"});
};

function addQuestion(req,res,next){
    // Database operations to add a new question
    res.json({message: "Question added or posted successfully"});
}

function getQuestion(req,res,next){
    // Database operations to get a question by id
    res.json({message: "Question data retrieved successfully"});
}

function answerQuestion(req,res,next){
    // Database operations to answer a question by id
    res.json({message: "Answer added or posted successfully to the question"});
}

function editAsnweredQuestion(req,res,next){
    // Database operations to edit an answered question by id
    res.json({message: "Answer edited successfully"});
}

module.exports={
    addUser,
    getUser,
    updateUser,
    addQuestion,
    getQuestion,
    answerQuestion,
    editAsnweredQuestion
};