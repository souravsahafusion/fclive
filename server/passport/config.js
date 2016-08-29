var User = require('../models/user'),
    FacebookStrategy = require('passport-facebook').Strategy,
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = {
    deserialize: function(id, done) {
        User.findOne({
            _id: id
        }, function(err, user) {
            done(err, user);
        })
    },
    serialize: function(user, done) {
        done(null, user._id);
    },
    facebookStrategy: new FacebookStrategy({
        clientID: '745149152290062',
        clientSecret: '6a694f7a52db1915546fd645b37bc248',
        callbackURL: "http://localhost:3000/api/users/facebook/callback",
        profileFields: ['id', 'displayName', 'picture', 'emails', 'gender', 'about', 'bio']
    }, function(accessToken, refreshToken, profile, cb) {
        var error = {error: 'Could not log in'};
        User.findOne({id: profile.id}, function(err, user){

            if(err){
                return res.send(error);
            }

            if(user){
                var sendUser = {};
                sendUser.type = 'Old user';
                sendUser.user = user;
                return cb(sendUser);
            }

            var newUser = new User();
            newUser.id = profile.id;
            newUser.name = profile.displayName;
            newUser.account  = 'facebook';
            newUser.gender = profile.gender;
            newUser.profile_pic = profile.photos[0].value;
            newUser.save(function(err, user){
                if(err || !user){
                    console.log(err);
                    return cb(error);
                }

                var sendUser = {};
                sendUser.type = 'New user';
                sendUser.user = user;
                return cb(sendUser);

            });

        });

    }),

    googleStrategy : new GoogleStrategy({
            clientID        : '530951754392-fafltr12439sto93ha019f94mu4ih9s7.apps.googleusercontent.com',
            clientSecret    : 'CcrRzdVAwO89_gqvkN7AHziK',
            callbackURL     : 'http://localhost:3000/api/users/auth/google/callback',
        },
        function(token, refreshToken, profile, done) {

            // make the code asynchronous
            // User.findOne won't fire until we have all our data back from Google
            //process.nextTick(function() {

                // try to find the user based on their google id
                User.findOne({ id : profile.id}, function(err, user) {
                    if (err)
                        return done(err);
                    console.log('After redirect ', err, user);
                    if (user) {

                        // if a user is found, log them in
                        return done(null, user);
                    } else {
                        // if the user isnt in our database, create a new user
                        var newUser = new User();

                        // set all of the relevant information
                        newUser.id    = profile.id;
                        newUser.token = token;
                        newUser.name  = profile.displayName;
                        newUser.account  = 'google';
                        newUser.email = profile.emails[0].value; // pull the first email

                        // save the user
                        newUser.save(function(err) {
                            if (err){
                                throw err;
                            }
                            return done(null, newUser);
                        });
                    }
                });
            //});
    })
};