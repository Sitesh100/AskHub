const express = require("express");

const bodyParser = require("body-parser");
const errorHandler = require("./utils/errorHandlers");

const {PORT} = require("../src/config/server.config")

const apiRouter = require("./routes/index")
const app = express();

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// let port = 3000;
app.use('/api',apiRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
