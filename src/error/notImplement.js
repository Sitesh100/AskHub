const baseError = require('./base.error');

const { StatusCodes }= require('http-status-codes');

class NotImplemented extends baseError {
    constructor(methodeName) {
        super('NotImplementedError', StatusCodes.NOT_IMPLEMENTED, `${methodeName} Not Implemented`, {});
    }
}

module.exports = NotImplemented;