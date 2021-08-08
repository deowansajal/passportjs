const router = require('express').Router()
const passport = require('passport')

const isAuth = require('../middleware/auth')
const { getMe, logout } = require('../controllers/authController')
/*_____________________FILES IMPORTING  END_________________________*/

const redirectCallback = (req, res) => {
    const token = req.user.getSignedJwtToken()
    res.redirect(`http://localhost:3000/login`)
}

const options = {
    failureRedirect: 'http://localhost:3000/login',
}
/*_____________________AUTH COMMON SETUP  END_________________________*/

router.get(
    '/auth/facebook',
    passport.authenticate('facebook', { scope: ['email'] })
)
router.get(
    '/auth/facebook/redirect',
    passport.authenticate('facebook', options),
    redirectCallback
)

/*_____________________SIGN IN WITH FACEBOOK END_________________________*/

router.get('/auth/twitter', passport.authenticate('twitter'))
router.get(
    '/auth/twitter/redirect',
    passport.authenticate('twitter', options),
    redirectCallback
)

/*_____________________SIGN IN WITH TWITTER END_________________________*/

router.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
    })
)
router.get(
    '/auth/google/redirect',
    passport.authenticate('google', options),
    redirectCallback
)

/*_____________________SIGN IN WITH GOOGLE END_________________________*/

router.get('/auth/github', passport.authenticate('github'))
router.get(
    '/auth/github/redirect',
    passport.authenticate('github', options),
    redirectCallback
)

/*_____________________SIGN IN WITH GITHUB END_________________________*/

router.get('/auth/me', getMe)
router.post('/auth/logout', logout)

module.exports = router
