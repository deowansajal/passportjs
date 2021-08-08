require('dotenv').config({ path: './config/.env' })
const express = require('express')
const passport = require('passport')

const connectDb = require('./config/db')
const middleware = require('./middleware/middleware')
const authRoute = require('./routes/authRoute')
/*_________________________FILES IMPORTING  END___________________________*/

// Initial app
const app = express()

// Set port
const port = process.env.PORT || 4000

// Set proxy
app.set('trust proxy', 1)

// Middleware
middleware(app)

// Config passport
require('./config/passport')(passport)

app.use('/api', authRoute)

// Handle Error
app.use((err, req, res, next) => {
    const { message, statusCode } = err

    if (!statusCode || statusCode === 200) {
        return res
            .status(500)
            .json({ message: 'An Internal server Error Occurred!' })
    }

    res.status(statusCode).json({
        message,
    })
})

connectDb().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})
