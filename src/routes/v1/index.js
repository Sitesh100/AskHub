const express = require('express');

const dataRouter = require('./data.routes');

const v1Router = express.Router();

v1Router.use('/data',dataRouter);

module.exports=v1Router;