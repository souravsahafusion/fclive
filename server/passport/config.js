var User = require('../models/user'),
    FacebookStrategy = require('passport-facebook').Strategy;

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

    })
};