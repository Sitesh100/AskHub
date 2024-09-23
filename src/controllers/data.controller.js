function addUser(req,res){
    // Database operations to add a new user
    res.json({message: "User added successfully"});
};

function getUser(req,res){
    // Database operations to get a user by id
    res.json({message: "User data retrieved successfully"});
};

function updateUser(req,res){
    // Database operations to update a user by id
    res.json({message: "User data updated successfully"});
};

function addQuestion(req,res){
    // Database operations to add a new question
    res.json({message: "Question added or posted successfully"});
}

function getQuestion(req,res){
    // Database operations to get a question by id
    res.json({message: "Question data retrieved successfully"});
}

function answerQuestion(req,res){
    // Database operations to answer a question by id
    res.json({message: "Answer added or posted successfully to the question"});
}

module.exports={
    addUser,
    getUser,
    updateUser,
    addQuestion,
    getQuestion,
    answerQuestion
};