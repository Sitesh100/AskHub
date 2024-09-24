const baseError = require('../error/base.error');
const {StatusCodes} = require('http-status-codes');

class BadRequest extends baseError {
    constructor(propertyName, details){
        super("BadRequest",StatusCodes.BAD_REQUEST, `Invalid structure for ${propertyName} provided`, details);
    }
}

module.exports = BadRequest;