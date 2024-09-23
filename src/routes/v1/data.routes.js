const express = require('express');

const { dataController } = require('../../controllers/index.js');

const dataRouter = express.Router();

dataRouter.post('/users',dataController.addUser);

dataRouter.get('/users/:id', dataController.getUser);

dataRouter.put('/users/:id', dataController.updateUser);

dataRouter.post('/questions', dataController.addQuestion);

dataRouter.get('/questions/search', dataController.getQuestion);

dataRouter.post('/questions/:id/answers', dataController.answerQuestion);


module.exports = dataRouter;