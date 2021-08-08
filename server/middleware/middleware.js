const express = require('express')
const session = require('express-session')
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport')
const MongoDBStore = require('connect-mongodb-session')(session)

const User = require('../models/User')

const store = new MongoDBStore({
    uri: process.env.MONGO_URI,
    collection: 'sessions',
})

const middleware = app => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(
        session({
            secret: process.env.SESSION_SECRET,
            resave: false,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
            },
            store: store,
            saveUninitialized: true,
        })
    )
    app.use(cors({ origin: 'http:localhost/3000', credentials: true }))
    app.use(morgan('dev'))

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user)
        })
    })

    // Passport initialize
    app.use(passport.initialize())

    // Passport session initialize
    app.use(passport.session())
}

module.exports = middleware
