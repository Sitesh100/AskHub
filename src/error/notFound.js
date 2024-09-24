const baseError = require('../error/base.error');
const { StatusCodes } = require('http-status-codes');

class NotFound extends baseError{
    constructor(resourceName, resourceValue){
        super('NotFoundError', StatusCodes.NOT_FOUND, `${resourceName} not found with value: ${resourceValue}`, {resourceName, resourceValue });
    }
}