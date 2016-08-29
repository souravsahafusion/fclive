var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    id: {type: String, index: {unique: true}},
    name: {type: String},
    gender: {type: String},
    profile_pic: {type: String},
    address: String,
    created_at: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('User',UserSchema);