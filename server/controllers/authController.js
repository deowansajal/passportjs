const asyncHandler = require('../middleware/asyncHandler')
const ErrorResponse = require('../utils/ErrorResponse')

exports.getMe = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        throw new ErrorResponse({
            statusCode: 401,
            message: 'Bad request',
        })
    }
    const { name, email, _id } = req.user

    res.status(200).json({
        message: 'Welcome to your account',
        success: true,
        user: {
            _id,
            name,
            email,
        },
    })
})

exports.logout = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        throw new ErrorResponse({
            statusCode: 401,
            message: 'Bad request',
        })
    }
    req.logout()
    req.session.destroy()
    res.clearCookie('connect.sid')
    res.json({ message: 'Logout successful' })
})
