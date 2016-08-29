var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');
/* GET users listing. */
router.get('/', function(req, res, next) {
    User.find({}, function(err, user) {
        res.json(user);
    });
});


/* Transfer call to facebook */
router.get('/auth/facebook', passport.authenticate('facebook'));
/* Handle callback requests */
router.get('/facebook/callback', function(req, res, next) {
    passport.authenticate('facebook', function(user) {
        // Checking if user object is present
        if (user.user) {
            req.logIn(user.user, function(err) {});
        }
        res.redirect('/');
    })(req, res, next);
});

// Auth call to google
router.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
// Handle callback
router.get('/auth/google/callback',
            passport.authenticate('google', {
                    successRedirect : '/',
                    failureRedirect : '/'
}));


/* logout */
router.get('/logout', function(req, res) {
    req.logout();
    res.send({
        success: 'Logout successful'
    });
});
/* Get Current User */
router.get('/user', function(req, res) {
    if (req.user) {
        res.json(req.user);
    } else {
        res.json({
            error: 'Not Logged In!'
        });
    }
});

module.exports = router;
