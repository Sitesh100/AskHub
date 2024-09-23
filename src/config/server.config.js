const dotenv = require('dotenv');

dotenv.config({path:'./src/.env'});

module.exports = {
    PORT: process.env.PORT || 3000
}