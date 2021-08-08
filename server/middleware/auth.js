const jwt = require('jsonwebtoken')

const User = require('../models/User')

const isAuth = async (req, res, next) => {
    let token
    const { authorization } = req.headers
    if (authorization && authorization.startsWith('Bearer')) {
        token = authorization.split(' ')[1]
    }

    if (!token) {
        throw new Error({
            message: 'Not authorized to access this route',
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded.user)

    next()
}

module.exports = isAuth
