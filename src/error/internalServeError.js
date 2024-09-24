const baseError = require('./base.error');
const {StatusCodes} = require('http-status-codes');

class InternalServerError extends baseError{
    constructor(details){
        super('InternalServerError', StatusCodes.INTERNAL_SERVER_ERROR, 'Something went wrong!!', details);
    }
}

module.exports = InternalServerError;