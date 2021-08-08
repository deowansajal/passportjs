module.exports = class ErrorResponse extends Error {
    constructor({ message, statusCode = 400, error = {} }) {
        super(message)
        this.statusCode = statusCode
        this.error = error
        this.success = false
        Error.captureStackTrace(this, this.constructor)
    }
}
